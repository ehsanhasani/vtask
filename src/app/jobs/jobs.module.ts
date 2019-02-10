import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsComponent } from './jobs.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { JobsService } from './jobs.service';
import { ListNotfoundComponent } from './list-notfound/list-notfound.component';

@NgModule({
  declarations: [JobsComponent, ListComponent, ListItemComponent, ListNotfoundComponent],
  imports: [
    CommonModule
  ],
  exports: [JobsComponent],
  providers: [JobsService]
})
export class JobsModule { }
