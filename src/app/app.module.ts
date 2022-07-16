import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule} from '@angular/common/http' ;
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from "@angular/forms";
import { UserUpdateComponent } from './user-update/user-update.component';
import { NaviComponent } from './navi/navi.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    ListUsersComponent,
    UserUpdateComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
