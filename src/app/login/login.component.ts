import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  public username = '';
  public password = '';
  public correctUser = 'Pizagod';
  public correctPass = 'pass';
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

   login(username,password){

    if (this.username == this.correctUser && this.password == this.correctPass) {
      alert('user authenticated');
      this.router.navigate(['home']);
    }
    else{
      alert('incorrect data, try again');
    }

   }
}
