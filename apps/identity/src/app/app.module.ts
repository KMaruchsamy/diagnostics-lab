import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IdentityAuthModule } from '@diagnostics-lab/identity-auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, IdentityAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
