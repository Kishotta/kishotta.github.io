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
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  };

  // Recent Experience (limited to most recent positions)
  recentExperience = [
    {
      position: 'Software Engineer II',
      company: 'Community Care of Oklahoma',
      location: 'Tulsa, Oklahoma',
      startDate: 'July 2025',
      endDate: 'Present',
      responsibilities: [
        'Took over manual EDI processes',
        'Developed strategies for legacy modernization',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'TEAM Professional Services',
      location: 'Tulsa, Oklahoma',
      startDate: 'November 2020',
      endDate: 'June 2025',
      responsibilities: [
        'Helped introduce unit tests to improve regressions',
        'Designed modular monolith for future functionality',
        'Onboarded & mentored new developers',
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
