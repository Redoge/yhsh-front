import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmailActivateService} from "../../service/emailActivate/email-activate.service";
import {UserService} from "../../service/user/user.service";

@Component({
  selector: 'app-email-activate-modal',
  templateUrl: './email-activate.component.html',
  styleUrls: ['./email-activate.component.css']
})
export class EmailActivateComponent {
  // @ts-ignore
  @ViewChild('myModal') myModalRef: ElementRef;
  protected modalElement = null;
  code = '';
  error = '';
  success = '';
  constructor(private emailActivateService: EmailActivateService, private userService: UserService) {
  }

  open(){
    this.myModalRef.nativeElement.style.display = "block";
  }
  close(){
    this.myModalRef.nativeElement.style.display = "none";
  }

  resendCode() {
    this.userService.getLoggedUser().subscribe(respUser=>{
      this.emailActivateService.resendCode(respUser.email).subscribe(res=>{
        this.success = 'The activation code has been successfully sent'
      }, err=>{
          if(err.status!=200) {
            this.error = 'Something went wrong...';
          }else{
            this.success = 'The activation code has been successfully sent'
          }
      });
    })
  }

  activateEmail(){
    if(this.code.length>10){
      this.emailActivateService.activateEmail(this.code).subscribe(ans=>{
        window.location.reload();//TODO: without reload
      }, err=>{
        if(err.status!=200) {
          this.error = 'Something went wrong...';
        }else{
          window.location.reload();//TODO: without reload
        }
      })
    }else{
      this.error = 'Activation code invalid!';
    }
  }

  closeAll(){
    this.error = '';
    this.success = '';
  }
}
