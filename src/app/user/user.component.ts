import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 public email;
 public userNew;
 public password;

  constructor(public api:ApiService) { }

  ngOnInit(): void {
  }

  addUser(){
    alert('An user has been added'+ " "+this.userNew+ " "+ this.email +" "+ this.password)
  }
  getStuff(){
    return this.api.getTypeRequest('/remedial').subscribe(res =>{
      alert(res)
    })

  }
  
  postUser(){
    let cosa = {"name":this.userNew, "lastName": this.email}
    return this.api.postTypeRequest('/failure',cosa).subscribe(res =>{
     let _res = res;
     
      alert(res["name"]+ res["LastName"])
    })
  }




}
