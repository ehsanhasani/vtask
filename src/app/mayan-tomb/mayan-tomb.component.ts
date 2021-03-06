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
  lazer: number;
  constructor(private mayanTombService: MayanTombService) {
    this.lazer = 0;
  }

  ngOnInit() {
    this.create2DTomb(11);
  }
  // call creat2DTomb from mayan service
  create2DTomb(row: number) {
    this.tombsDimentional = this.mayanTombService
      .create2DTomb(row);
  }
  // calculate number of layzer bob will need it
  calculate() {
    this.lazer = this.mayanTombService
      .calculate(this.tombsDimentional);
  }

}
