import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(public translate : TranslateService) {
    translate.addLangs(['en','fr']);
    translate.setDefaultLang('en');
  }

  //Methode pour changer entre les langues
  switchLang(lang : string) {
    this.translate.use(lang);
  }
}
