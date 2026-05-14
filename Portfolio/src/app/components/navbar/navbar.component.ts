import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false,
})
export class NavbarComponent {
  isNavbarHidden = false;
  lastScrollPosition = 0;
  language: string = 'en';

  constructor(public translator: TranslateService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const current = window.pageYOffset;
    this.isNavbarHidden = current > this.lastScrollPosition && current > 50;
    this.lastScrollPosition = current;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.clientY < 50) {
      this.isNavbarHidden = false;
    }
  }

  changeLangue(): void {
    this.translator.use(this.language);
  }

  scrollTo(anchor: string, event: Event): void {
    event.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
