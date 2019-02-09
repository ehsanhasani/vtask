import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsComponent } from './jobs.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [JobsComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [JobsComponent]
})
export class JobsModule { }
