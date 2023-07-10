import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private htmlElement =  document.querySelector('html');
  protected theme;


  constructor() {
    this.theme = this.getThemeFromStorage();
    this.changeTheme(this.theme)
  }

  changeTheme(theme: string) {
    if (this.htmlElement) {
      this.htmlElement.setAttribute('data-bs-theme', theme);
      this.saveThemeToStorage(theme)
      this.theme = theme;
    }
  }
  getTheme(){
    return this.theme;
  }

  private saveThemeToStorage(theme: string) {
    localStorage.setItem('theme', theme)
  }
  private getThemeFromStorage() {
    return localStorage.getItem("theme") || "dark";
  }
}
