import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  language : string = "fr";
  constructor(public translator : TranslateService){
    this.translator.defaultLang = this.language;
    this.translator.use(this.language);
  }
  changeLangue():void{
    this.translator.use(this.language);
  }
}
