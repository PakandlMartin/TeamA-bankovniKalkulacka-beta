import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-calculation',
  templateUrl: './form-calculation.component.html',
  styleUrls: ['./form-calculation.component.css']
})
export class FormCalculationComponent implements OnInit {
amountInput: number = 0;
numOfMOnthsInput: number = 0;
btnActive: boolean = false;


  constructor() { }

  ngOnInit(): void {


  }

  calculate(amountCalculate, numOfMonthsCalculate ) {
  }
  
  changeOfAmount(amountChange) {
    this.amountInput = amountChange.target.value
    this.changeBtnActive()
  }

  changeOfNumOfMonths(numChange) {
    this.numOfMOnthsInput = numChange.target.value
    this.changeBtnActive()
  }

  changeBtnActive() {
    if (this.amountInput && this.numOfMOnthsInput) {
      this.btnActive = true;
      } else {
        this.btnActive = false;
      }
  }

  // changeOfNumOfMonths()

}
