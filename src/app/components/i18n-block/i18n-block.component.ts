import { Component, OnInit } from '@angular/core';
import {LangService} from "../../service/lang/lang.service";

@Component({
  selector: 'app-i18n-block',
  templateUrl: './i18n-block.component.html',
  styleUrls: ['./i18n-block.component.css']
})
export class I18nBlockComponent implements OnInit {

  protected language: string;
  constructor(private langService: LangService) {
    this.language = langService.getCurrentLanguage();
  }

  ngOnInit(): void {
  }

  changeLang(){
    this.langService.setLanguage(this.language);
  }
}
