import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-page-admin',
  templateUrl: './user-page-admin.component.html',
  styleUrls: ['./user-page-admin.component.css']
})
export class UserPageAdminComponent {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.username = <string>this.route.snapshot.paramMap.get('username');
  }
}
