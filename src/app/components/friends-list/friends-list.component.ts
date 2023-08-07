import {Component, Input} from '@angular/core';
import {UserDto} from "../../dto/UserDto";
import {FriendsService} from "../../service/friends/friends.service";
import {FriendRequestDto} from "../../dto/FriendRequestDto";
import {JwtService} from "../../service/jwt/jwt.service";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent{
  @Input() friends: UserDto[] = [];

  constructor(private friendService: FriendsService, private jwtService: JwtService) {
  }

  removeFriend(username: string) {
      if(confirm("Are you sure you want to remove this friend - " + username+" ?")){
        const dto: FriendRequestDto = {
          senderUsername: this.jwtService.getUsername(),
          recipientUsername: username
        }
          this.friendService.removeFriendByFriendRequestDto(dto).subscribe(success =>{
            this.friends = this.friends.filter(f=> f.username !== username);
          })
      }
  }
}
