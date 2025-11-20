import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class ResumeComponent {
  // Personal Information
  name = 'Connor Eaves';
  handle = 'Kishotta';
  title = 'Software Engineer';

  // Contact Information
  contact = {
    email: 'kishotta@gmail.com',
    phone: '(918) 950-1992',
    location: 'Tulsa, Oklahoma',
    linkedin: 'linkedin.com/in/connor-eaves',
    github: 'github.com/Kishotta',
    website: 'kishotta.github.io',
  };

  // Profile Summary
  profile =
    'Software Engineer with &gt;6 years of experience in developing scalable, observable, robust web applications, and staying up to date with .Net ecosystem best practices, trends, developments, and innovations. My goal is to use my knowledge and abilities to deliver high quality software that helps improve the lives of my users by providing useful, intuitive, and secure tools to enhance their productivity, and provide necessary services. I focus on predictable, clean, maintainable, self-documenting, extensible code that ensures a positive developer experience for anyone sharing a codebase with me.';

  // Skills
  skills = {
    languages: ['C#', 'PHP', 'TypeScript'],
    frameworks: ['.Net', 'Laravel', 'Angular'],
    tools: [
      'Git',
      'Docker',
      'Aspire',
      'JetBrains',
      'VS Code',
      'Tailwind CSS',
      'Domain Driven Design',
      'Event Based Architecture',
    ],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  };

  // Education
  education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Oklahoma State University',
      location: 'Tulsa, Oklahoma',
      graduationDate: '2015 - 2017',
      gpa: null,
    },
    {
      degree: 'Associate of Science',
      institution: 'Tulsa Community College',
      location: 'Tulsa, Oklahoma',
      graduationDate: '2012 - 2014',
      gpa: null,
    },
  ];

  // Experience
  experience = [
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
        'Helped reimagine legacy PHP system in Laravel',
        'Helped introduce unit tests to improve regressions',
        'Designed microservice architecture for next-gen services',
        'Designed modular monolith for future functionality',
        'Developed reactive front-end application for next-gen services',
        'Worked with Infrastructure to introduce IDP &amp; API gateway',
        'Onboarded &amp; mentored new developers',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'GlobalTranz',
      location: 'Tulsa, Oklahoma',
      startDate: 'March 2019',
      endDate: 'June 2020',
      responsibilities: [
        'Helped deliver industry-leading functionality',
        'Maintained legacy SOAP APIs',
        'Refactored legacy SOAP APIs to support REST &amp; modern architectures',
      ],
    },
  ];
}
