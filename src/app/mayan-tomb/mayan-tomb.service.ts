import { Injectable } from '@angular/core';
import { Tomb } from './tomb';

@Injectable({
  providedIn: 'root'
})
export class MayanTombService {
  // contain 2d array of tomb => statue
  tombArray: any;

  constructor() { }

  // create array for tomb draw and use for calculation
  create2DTomb(rowNumber: number) {
    const middleRowNumber = this.calculateRowNumberAverage(rowNumber);
    this.tombArray = [];
    for (let i = 0; i < rowNumber; i++) {
      this.tombArray[i] = [];
      for (let j = 0; j < rowNumber; j++) {
        // instantiate Tomb
        const tomb = new Tomb();
        // set i and j of array
        tomb.setI(i);
        tomb.setJ(j);
        // set x and y of array
        tomb.setX(middleRowNumber - i);
        tomb.setY(j - middleRowNumber);
        // check if in middle position is position of Bob
        if (i === middleRowNumber && j === middleRowNumber) {
          tomb.setbBobPosition();
        }
        // push tomb in array of tomb
        this.tombArray[i][j] = tomb;
      }
    }

    return this.tombArray;
  }
  // calculate middle of row number
  public calculateRowNumberAverage(rowNumber: number): number {
    return Math.floor(rowNumber / 2);
  }
  // calculate number of layzer bob will need it
  public calculate(tombs) {
    console.log(tombs);
  }
}
