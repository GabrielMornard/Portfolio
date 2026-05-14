import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: false,
})
export class HeroComponent {
  scrollTo(anchor: string, event: Event): void {
    event.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
