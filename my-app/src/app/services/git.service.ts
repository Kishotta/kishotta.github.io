import { Injectable, signal } from '@angular/core';

export interface GitCommit {
  sha: string;
  message: string;
  author: string;
  date: Date;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class GitService {
  private readonly owner = 'Kishotta';
  private readonly repo = 'kishotta.github.io';
  private readonly perPage = 10;

  commits = signal<GitCommit[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  hasMore = signal(true);
  private page = 1;

  async loadCommits() {
    if (this.loading()) return;

    this.loading.set(true);
    this.error.set(null);

    try {
      const url = `https://api.github.com/repos/${this.owner}/${this.repo}/commits?page=${this.page}&per_page=${this.perPage}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch commits: ${response.statusText}`);
      }

      const data = await response.json();

      const newCommits: GitCommit[] = data.map((commit: any) => ({
        sha: commit.sha,
        message: commit.commit.message,
        author: commit.commit.author.name,
        date: new Date(commit.commit.author.date),
        url: commit.html_url,
      }));

      this.commits.update((current) => [...current, ...newCommits]);
      this.hasMore.set(newCommits.length === this.perPage);
      this.page++;
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      this.loading.set(false);
    }
  }

  reset() {
    this.commits.set([]);
    this.page = 1;
    this.hasMore.set(true);
    this.error.set(null);
  }
}
