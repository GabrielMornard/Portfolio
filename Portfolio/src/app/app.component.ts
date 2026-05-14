import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  bubbles = Array.from({ length: 100 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    speed: `${Math.floor(Math.random() * 25) + 10}`,
  }));

  constructor(private translator: TranslateService) {
    this.translator.defaultLang = 'en';
    this.translator.use('en');
  }
}
