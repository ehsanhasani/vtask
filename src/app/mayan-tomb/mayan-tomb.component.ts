import { Component, OnInit } from '@angular/core';

import { MayanTombService } from './mayan-tomb.service';
import { Tomb } from './tomb';

@Component({
  selector: 'app-mayan-tomb',
  templateUrl: './mayan-tomb.component.html',
  styleUrls: ['./mayan-tomb.component.scss']
})
export class MayanTombComponent implements OnInit {
  tombsDimentional: Tomb[][];
  constructor(private mayanTombService: MayanTombService) { }

  ngOnInit() {
    this.create2DTomb(7);
  }
  // call creat2DTomb from mayan service
  create2DTomb(row: number) {
    this.tombsDimentional = this.mayanTombService
      .create2DTomb(row);
  }

  calculate() {
    console.log(this.tombsDimentional);
  }

}
