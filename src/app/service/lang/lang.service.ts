import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangService {
  constructor(private translateService: TranslateService) {
  }
  setLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translateService.use(language);
  }
  public getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
  }
}
