import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.scss']
})
export class NavbarLinkComponent implements OnInit {
  @Input() href: string;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
