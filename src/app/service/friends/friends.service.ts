import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN_PATH} from "../../environments/environment";
import {map} from "rxjs";
import {UserDto} from "../../dto/UserDto";
import {FriendRequestDto} from "../../dto/FriendRequestDto";
import {FriendshipDto} from "../../dto/FriendshipDto";
import {Page} from "../../dto/Page";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient:HttpClient) { }

  public sendFriendsRequest(dto: FriendRequestDto){
    return this.httpClient.post(DOMAIN_PATH + '/friendship', dto).pipe(
      map((resp: any) => {
        const response: boolean = resp;
        return response;
      })
    );
  }
  public removeFriendsRequest(dto: FriendRequestDto){
    return this.httpClient.post(DOMAIN_PATH + '/friendship/remove', dto).pipe(
      map((resp: any) => {
        const response: boolean = resp;
        return response;
      })
    );
  }
  public getAllFriendsByUsername(username: string){
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username+"/friends").pipe(
      map((response: any) => {
        const friends: Page<UserDto> = response;
        return friends;
      })
    );
  }
  public removeFriendByFriendRequestDto(dto: FriendRequestDto){
    return this.httpClient.post(DOMAIN_PATH + '/users/friends/remove', dto).pipe(
      map((resp: any) => {
        const response: boolean = resp;
        return response;
      })
    );
  }
  public getAllFriendsRequestsByUsername(username: string){
    return this.httpClient.get(DOMAIN_PATH + '/users/'+username+"/friends/requests").pipe(
      map((response: any) => {
        const friends: FriendshipDto[] = response;
        return friends;
      })
    );
  }
}
