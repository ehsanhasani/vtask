import { Component, OnInit, Input } from '@angular/core';
import { Tomb } from '../tomb';

@Component({
  selector: 'app-tomb',
  templateUrl: './tomb.component.html',
  styleUrls: ['./tomb.component.scss']
})
export class TombComponent implements OnInit {
  @Input() tombs: Tomb[][];
  constructor() { }

  ngOnInit() {
  }
  // set statue on tomb
  onSetStatue(tomb) {
    this.tombs[tomb.getI()][tomb.getJ()].setStatue();
  }

}
