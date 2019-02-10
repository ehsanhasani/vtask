import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  template: `
    <div class="col-md-12">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
