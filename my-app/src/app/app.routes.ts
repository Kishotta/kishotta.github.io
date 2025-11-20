import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume';

export const routes: Routes = [
  { path: '', redirectTo: '/resume', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
];
