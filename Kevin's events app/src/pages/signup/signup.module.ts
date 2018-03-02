import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { signupPage } from './signup';

@NgModule({
  declarations: [
    signupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  exports:[ signupPage

  ]
})
export class SignupPageModule {}
