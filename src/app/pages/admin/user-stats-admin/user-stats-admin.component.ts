import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-stats-admin',
  templateUrl: './user-stats-admin.component.html',
  styleUrls: ['./user-stats-admin.component.css']
})
export class UserStatsAdminComponent {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.username = <string>this.route.snapshot.paramMap.get('username');
  }
}
