import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // boolean for show or hidden loading on top navbar
  display: boolean;
  // event emitter for subscribe on it to check whether show or hidden it
  @Output() displayloading: EventEmitter<any> = new EventEmitter();
  // function for emit event and change display
  displayLoader() {
    this.display = !this.display;
    this.displayloading.emit(this.display);
  }
}
