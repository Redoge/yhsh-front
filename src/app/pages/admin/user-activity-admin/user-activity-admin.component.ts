import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-activity-admin',
  templateUrl: './user-activity-admin.component.html',
  styleUrls: ['./user-activity-admin.component.css']
})
export class UserActivityAdminComponent {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.username = <string>this.route.snapshot.paramMap.get('username');
  }
}
