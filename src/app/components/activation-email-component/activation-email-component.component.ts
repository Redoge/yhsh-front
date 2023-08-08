import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmailActivateService} from "../../service/emailActivate/email-activate.service";

@Component({
  selector: 'app-activation-email-component',
  templateUrl: './activation-email-component.component.html',
  styleUrls: ['./activation-email-component.component.css']
})
export class ActivationEmailComponentComponent implements OnInit{
  private code: string = '';
  protected error = '';
  protected success = '';
  constructor(private route: ActivatedRoute, private emailActivateService: EmailActivateService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.code = params['token'];
      this.activateEmail();
    });
  }
  activateEmail(){
    if(this.code.length>10){
      this.emailActivateService.activateEmail(this.code).subscribe(ans=>{
        this.success = "Email activated!!!"
      }, err=>{
        if(err.status!=200) {
          this.error = 'Something went wrong...';
        }else{
          this.success = "Email activated!!!"
        }
      })
    }else{
      this.error = 'Activation code invalid!';
    }
  }
}
