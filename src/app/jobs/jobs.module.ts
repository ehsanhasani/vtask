import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsComponent } from './jobs.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [JobsComponent, ListComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [JobsComponent]
})
export class JobsModule { }
