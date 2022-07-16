import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  regUsers(data:any){
    return this.http.post('https://reqres.in/api/users',data);
  }

  updateUser(id:any){
    return this.http.put('https://reqres.in/api/users/2',id);
  }

  deleteUser(uid:any){
    return this.http.delete('https://reqres.in/api/users/2',uid)
  }

}
