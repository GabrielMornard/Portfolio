import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';
  isNavbarHidden = false;
  isNavbarClicked = false;
  lastScrollPosition = 0;

  language: string = 'en';
  buttonSetting: boolean = false;
  faLinkedin = faLinkedin;
  faDownload = faDownload;

  constructor(
    public translator: TranslateService,
    private viewportScroller: ViewportScroller
  ) {
    this.translator.defaultLang = this.language;
    this.translator.use(this.language);
  }

  onNavbarClick() {
    this.isNavbarClicked = !this.isNavbarClicked;
    if (!this.isNavbarClicked) {
      setTimeout(() => {
        this.isNavbarHidden = false;
      }, 500);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (
      currentScrollPosition > this.lastScrollPosition &&
      currentScrollPosition > 50
    ) {
      this.isNavbarHidden = true;
    } else {
      this.isNavbarHidden = false;
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const mouseY = event.clientY;
    if (mouseY < 50) {
      this.isNavbarHidden = false;
    }
  }

  changeLangue(): void {
    this.translator.use(this.language);
  }

  ShowSettings() {
    this.buttonSetting = !this.buttonSetting;
  }

  ngAfterViewInit() {
    this.initBubbles();
  }

  scrollTo(anchor: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    const element = document.querySelector(anchor);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  }

  initBubbles() {
    console.log('DOM fully loaded and parsed');
    const bubblesContainer = document.getElementById('bubbles');

    if (bubblesContainer) {
      console.log('Bubbles container found');
      const maxBubbles = 100; // Set a maximum number of bubbles

      for (let i = 0; i < maxBubbles; i++) {
        const bubble = document.createElement('span');
        bubble.style.setProperty(
          '--i',
          `${Math.floor(Math.random() * 25) + 10}`
        );
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubblesContainer.appendChild(bubble);
      }
    }
  }
}
