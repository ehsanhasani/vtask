import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { NavbarBrandComponent } from './navbar-brand/navbar-brand.component';

@NgModule({
  declarations: [NavbarComponent, NavbarLinkComponent, NavbarBrandComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
