import { Component, OnInit } from '@angular/core';

import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  display: boolean;

  // loading service for can subscribe
  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.display = false;
    this.loadingService.displayloading.subscribe((display: boolean) => this.display = display);
  }

}
