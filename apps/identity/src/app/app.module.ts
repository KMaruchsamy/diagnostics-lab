import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IdentityAuthModule } from '@diagnostics-lab/identity-auth';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IdentityAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
