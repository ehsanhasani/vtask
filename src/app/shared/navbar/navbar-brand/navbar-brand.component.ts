import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-brand',
  templateUrl: './navbar-brand.component.html',
  styleUrls: ['./navbar-brand.component.scss']
})
export class NavbarBrandComponent implements OnInit {
  @Input() href: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
