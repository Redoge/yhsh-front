import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LangService} from "./service/lang/lang.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translateService: TranslateService, private langService: LangService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.langService.getCurrentLanguage());
  }
}
