import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.html',
  styleUrl: './content-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCardComponent {}
