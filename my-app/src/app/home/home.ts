import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentCardComponent } from '../shared/content-card/content-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ContentCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  // Personal Information
  name = 'Connor Eaves';
  title = 'Software Engineer';

  // Skills
  skills = {
    languages: ['C#', 'PHP', 'TypeScript', 'F#'],
    frameworks: ['.Net', 'Laravel', 'Angular', 'Unity'],
    tools: ['Git', 'Docker', 'Domain Driven Design', 'Event Based Architecture'],
    databases: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Redis'],
  };

  // Recent Experience (limited to most recent positions)
  recentExperience = [
    {
      position: 'Software Engineer',
      company: 'Momentum3',
      location: 'Tulsa, Oklahoma',
      startDate: 'February 2026',
      endDate: 'Present',
      responsibilities: [
        'Helped port legacy application to updated data store, encompassing frontend, backend, persistence, and ETLs',
        'Used agentic workflows to enhance productivity',
        'Optimized and modernized stored procs and SSIS ETL packages',
      ],
    },
    {
      position: 'Software Engineer II',
      company: 'Community Care of Oklahoma',
      location: 'Tulsa, Oklahoma',
      startDate: 'July 2025',
      endDate: 'February 2026',
      responsibilities: [
        'Inherited manual EDI processes and developed documentation and training for support staff',
        'Developed strategies for modernizing end-of-life mission critical EDI ingress and egress applications',
      ],
    },
  ];

  // Education
  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Oklahoma State University',
      location: 'Tulsa, Oklahoma',
      graduationDate: '2015 - 2017',
    },
  ];
}
