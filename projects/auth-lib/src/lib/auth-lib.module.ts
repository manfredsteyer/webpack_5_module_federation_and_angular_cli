import { NgModule } from '@angular/core';
// import { UserComponent } from './user/user.component';
// import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
// import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule
  ],
  declarations: [
    // UserComponent,
    // LoginComponent
  DemoComponent],
  exports: [
    // UserComponent,
    // LoginComponent
  ]
})
export class AuthLibModule { }
