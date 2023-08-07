import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {FriendsService} from "../../../service/friends/friends.service";
import {JwtService} from "../../../service/jwt/jwt.service";

@Component({
  selector: 'app-friend-user-page',
  templateUrl: './friend-user-page.component.html',
  styleUrls: ['./friend-user-page.component.css']
})
export class FriendUserPageComponent {
  username: string;

  constructor(private route: ActivatedRoute, private title: Title, private friendService: FriendsService, private jwtService: JwtService, private router: Router) {
    this.username = <string>this.route.snapshot.paramMap.get('username');
    this.checkFriendAccess(this.username)
    title.setTitle("Friend - " + this.username)
  }

  private checkFriendAccess(username: string) {
    this.friendService.getAllFriendsByUsername(this.jwtService.getUsername()).subscribe(res=>{
      if(res.filter(f=>f.username.toLowerCase() == username.toLowerCase()).length == 0){
        this.router.navigate(['/'])
      }
    })
  }
}
