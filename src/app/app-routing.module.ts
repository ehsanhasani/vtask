import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsComponent } from './jobs/jobs.component';
import { MayanTombComponent } from './mayan-tomb/mayan-tomb.component';

const routes: Routes = [
  {path: '', redirectTo: '/jobs', pathMatch: 'full'},
  {path: 'jobs', component: JobsComponent},
  {path: 'mayan', component: MayanTombComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
