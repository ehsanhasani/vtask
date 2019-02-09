import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { JobsModule } from './jobs/jobs.module';
import { MayanTombModule } from './mayan-tomb/mayan-tomb.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    JobsModule,
    MayanTombModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
