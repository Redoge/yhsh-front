import { Component } from '@angular/core';
import {ThemeService} from "../../service/theme/theme.service";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  theme: string;


  constructor(private themeService: ThemeService) {
    this.theme = themeService.getTheme();
  }

  changeTheme() {
    this.themeService.changeTheme(this.theme);
    this.theme = this.themeService.getTheme();
  }
}
