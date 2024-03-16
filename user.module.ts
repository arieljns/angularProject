import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {AuthModalComponent} from "./auth-modal/auth-modal.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [AuthModalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ],
  exports: [AuthModalComponent]
})
export class UserModule {
}
