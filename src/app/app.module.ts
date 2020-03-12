import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoxitWebPDFComponent } from "ngx-foxitpdfsdkforweb";
import { SomeChildComponent } from './some-child/some-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FoxitWebPDFComponent,
    SomeChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
