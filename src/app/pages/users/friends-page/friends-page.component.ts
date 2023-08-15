import {Component} from '@angular/core';
import {JwtService} from "../../../service/jwt/jwt.service";
import {Title} from "@angular/platform-browser";
import {FriendsService} from "../../../service/friends/friends.service";
import {FriendRequestDto} from "../../../dto/FriendRequestDto";
import {FriendshipDto} from "../../../dto/FriendshipDto";
import {UserDto} from "../../../dto/UserDto";

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent {
  protected username: string;
  protected friendUsername: string = '';
  protected friendsRequests: FriendshipDto[] = [];
  protected error = '';
  protected success = ''
  protected friends: UserDto[] = [];

  constructor(private jwtService: JwtService, private titleService: Title, private friendService: FriendsService) {
    this.titleService.setTitle('Friends');
    this.username = jwtService.getUsername();
    this.getFriendsRequests()
    this.getFriends()
  }
  sendFriendRequestForm() {
    const dto: FriendRequestDto = {
      senderUsername: this.username,
      recipientUsername: this.friendUsername
    }
    this.sendFriendRequest(dto, true);
  }
  getFriendsRequests() {
    this.friendService.getAllFriendsRequestsByUsername(this.username).subscribe(res => {
      this.friendsRequests = res;
    })
  }
  confirm(friendUsername: string | undefined) {
    if (friendUsername) {
      const dto: FriendRequestDto = {
        senderUsername: this.username,
        recipientUsername: friendUsername
      }
      this.sendFriendRequest(dto, false)
      this.getFriendsRequests()
      this.getFriends()
    }
  }
  discard(friendUsername: string | undefined) {
    if (friendUsername) {
      const dto: FriendRequestDto = {
        senderUsername: friendUsername,
        recipientUsername: this.username
      }
      this.friendService.removeFriendsRequest(dto).subscribe(() => {
          this.getFriendsRequests()
        },
        () => {
          this.getFriendsRequests()
        })
    }
  }
  protected sendFriendRequest(dto: FriendRequestDto, newReq: boolean) {
    this.friendService.sendFriendsRequest(dto).subscribe(() => {
        this.getFriendsRequests()
        this.getFriends()
        this.error = '';
        this.success = newReq ? 'Request sent!':'Request confirmed!';
      },
      (err) => {
        this.error = err.error.message;
        this.success = '';
      })
  }
  public getFriends() {
    this.friendService.getAllFriendsByUsername(this.username).subscribe(answers => {
      this.friends = answers.content;
    }, () => {
    })
  }
}
