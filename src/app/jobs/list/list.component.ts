import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
