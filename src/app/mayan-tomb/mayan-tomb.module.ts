import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayanTombComponent } from './mayan-tomb.component';
import { TombComponent } from './tomb/tomb.component';
import { StatueComponent } from './statue/statue.component';
import { MayanTombService } from './mayan-tomb.service';
import { ButtonModule } from '../shared/button/button.module';

@NgModule({
  declarations: [MayanTombComponent, TombComponent, StatueComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [MayanTombComponent],
  // provide MayanTombService in MayanTombModule for logical calculation
  providers: [MayanTombService]
})
export class MayanTombModule { }
