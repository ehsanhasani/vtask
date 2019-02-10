import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnChanges {
  @Input() job;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
