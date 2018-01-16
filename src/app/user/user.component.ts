import { CommonModule } from '@angular/common';  
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Users } from '../shared/service/users';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private loading: boolean = false;
  private users:Array<any>;
  constructor(private http: Http, private userService: Users) { 
    //this.loadUsers();
  }

  ngOnInit() {
  }

  loadUsers(){
    this.loading=true;
    this.userService.getUsers().subscribe(
      userDetails => {
        this.loading=false;      
        this.users = userDetails; 
    },
    error => {
      this.loading=false;            
      console.log(error);      
    }
  );

  }

}
