import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AdminModule,
    AuthRoutingModule
  ],
  providers: [ AuthService ]
})
export class AuthModule { }
