import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statue',
  templateUrl: './statue.component.html',
  styleUrls: ['./statue.component.scss']
})
export class StatueComponent implements OnInit {
  @Input() tomb;
  constructor() { }

  ngOnInit() {
  }

}
