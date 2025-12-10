import { Component, OnInit, Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GitService } from '../services/git.service';
import { ContentCardComponent } from '../shared/content-card/content-card';
import { marked } from 'marked';

@Pipe({
  name: 'markdown',
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
    // Configure marked options for better rendering
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
  }

  transform(value: string): SafeHtml {
    if (!value) return '';
    const html = marked.parse(value) as string;
    // Sanitize the HTML to prevent XSS attacks
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, html);
    return this.sanitizer.bypassSecurityTrustHtml(sanitized || '');
  }
}

@Component({
  selector: 'app-changelog',
  standalone: true,
  imports: [CommonModule, MarkdownPipe, ContentCardComponent],
  templateUrl: './changelog.html',
  styleUrl: './changelog.css',
})
export class ChangelogComponent implements OnInit {
  constructor(public gitService: GitService) {}

  ngOnInit() {
    this.gitService.reset();
    this.gitService.loadCommits();
  }

  loadMore() {
    this.gitService.loadCommits();
  }

  getRelativeTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
      const interval = Math.floor(diffInSeconds / seconds);
      if (interval >= 1) {
        return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
      }
    }

    return 'just now';
  }

  getCommitTitle(message: string): string {
    return message.split('\n')[0];
  }

  hasCommitBody(message: string): boolean {
    return message.includes('\n\n');
  }

  getCommitBody(message: string): string {
    const parts = message.split('\n\n');
    return parts.length > 1 ? parts.slice(1).join('\n\n') : '';
  }
}
