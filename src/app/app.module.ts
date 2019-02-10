import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { JobsModule } from './jobs/jobs.module';
import { MayanTombModule } from './mayan-tomb/mayan-tomb.module';
import { LoadingModule } from './shared/loading/loading.module';
import { LoadingService } from './shared/loading/loading.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavbarModule,
    JobsModule,
    MayanTombModule,
    LoadingModule
  ],
  // loading service add to root project to all project reach to on instance
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
