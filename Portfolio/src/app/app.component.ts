import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';

  language: string = 'fr';
  buttonSetting: boolean = false;
  // Font Awesome icon
  faLinkedin = faLinkedin;
  faDownload = faDownload;

  constructor(public translator: TranslateService, private viewportScroller: ViewportScroller) {
    this.translator.defaultLang = this.language;
    this.translator.use(this.language);
  }

  changeLangue(): void {
    this.translator.use(this.language);
  }

  ShowSettings(){
    this.buttonSetting = !this.buttonSetting;
  }

  ngAfterViewInit() {
    this.initBubbles();
  }

  scrollTo(anchor: string, event: Event): void {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        bubble.style.setProperty('--i', `${Math.floor(Math.random() * 25) + 10}`);
        bubble.style.left = `${Math.random() * 100}%`; // Random horizontal position
        bubble.style.top = `${Math.random() * 100}%`;  // Random vertical position
        bubblesContainer.appendChild(bubble);
      }
    }
  }
}
