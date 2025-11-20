import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkMode = signal(false);

  constructor() {
    // Initialize theme on service creation
    this.initializeTheme();

    // Apply theme whenever it changes
    effect(() => {
      this.applyTheme();
    });
  }

  private initializeTheme() {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Use saved preference, or fall back to system preference
    this.isDarkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }

  toggleTheme() {
    this.isDarkMode.update((dark) => !dark);
  }

  private applyTheme() {
    const theme = this.isDarkMode() ? 'dark' : 'light';
    const htmlElement = document.documentElement;

    if (this.isDarkMode()) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }
}
