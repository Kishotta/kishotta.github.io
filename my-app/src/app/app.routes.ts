import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ResumeComponent } from './resume/resume';
import { ChangelogComponent } from './changelog/changelog';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'changelog', component: ChangelogComponent },
];
