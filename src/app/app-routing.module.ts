import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  {path: 'Registration', component:UserRegistrationComponent},
  {path: 'Listusers', component:ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
