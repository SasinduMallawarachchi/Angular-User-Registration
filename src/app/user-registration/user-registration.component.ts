import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../get-api.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  // registerForm = new FormGroup({
  //   Name: new FormControl(''),
  //   Email: new FormControl(''),
  //   Password:new FormControl(''),
  //   email:new FormControl(''),
  //   Tel:new FormControl('')
  // });

  constructor(private fb: FormBuilder, private getApi:GetAPIService ) { 
    this.getApi.getUsers().subscribe((data:any)=>{
      this.regUser = data;
    });
    
  }

  ngOnInit(): void {
    
  }

  regUser(data:any){
    console.warn(data)
    this.getApi.regUsers(data).subscribe((result)=>{
      console.warn(result)
    })
  }

  deleteUser(uid:any){
    console.warn(uid)
    this.getApi.deleteUser(uid).subscribe((remove)=>{
      console.warn(remove)
    })
  }

}
