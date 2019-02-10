import { Component, OnInit } from '@angular/core';

import { MayanTombService } from './mayan-tomb.service';

@Component({
  selector: 'app-mayan-tomb',
  templateUrl: './mayan-tomb.component.html',
  styleUrls: ['./mayan-tomb.component.scss']
})
export class MayanTombComponent implements OnInit {

  constructor(private mayanTombService: MayanTombService) { }

  ngOnInit() {
  }

}
