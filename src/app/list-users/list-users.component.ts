import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../get-api.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private api:GetAPIService) { }

  ngOnInit(){
    this.api.getUsers().subscribe((data)=>{
      console.warn("get api data",data);
    })
  }

}
