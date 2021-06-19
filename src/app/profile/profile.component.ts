import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public skill;
  public level;
  public experience;
  public address;
  public phone;
  constructor() { }

  ngOnInit(): void {
  }

  addProfile(){
    alert('profiles have been added ' + this.skill +" "+ this.experience + " " +this.level+" "+this.address+ " " + this.phone);
  }
}
