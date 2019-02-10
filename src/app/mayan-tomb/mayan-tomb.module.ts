import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayanTombComponent } from './mayan-tomb.component';
import { TombComponent } from './tomb/tomb.component';
import { StatueComponent } from './statue/statue.component';

@NgModule({
  declarations: [MayanTombComponent, TombComponent, StatueComponent],
  imports: [
    CommonModule
  ],
  exports: [MayanTombComponent]
})
export class MayanTombModule { }
