import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume';
import { ChangelogComponent } from './changelog/changelog';

export const routes: Routes = [
  { path: '', redirectTo: '/resume', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'changelog', component: ChangelogComponent },
];
