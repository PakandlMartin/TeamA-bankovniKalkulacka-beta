import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';

@Component({
  selector: 'app-form-calculation',
  templateUrl: './form-calculation.component.html',
  styleUrls: ['./form-calculation.component.css'],
})
export class FormCalculationComponent implements OnInit {
amountInput: number = 0;
numOfMOnthsInput: number = 0;
btnActive: boolean = false;
calculationInputs = {
  amount: 0,
  numOfMonths: 0
}


  constructor( 
    private httpRequestsService: HttpRequestsService ) {}

  ngOnInit(): void {
  }


  calculate(amountCalculate, numOfMonthsCalculate ) {
    this.calculationInputs.amount = amountCalculate;
    this.calculationInputs.numOfMonths = numOfMonthsCalculate
  }
  
  changeOfAmount(amountChange) {
    this.amountInput = Number(amountChange.target.value);
    this.calculationInputs.amount = this.amountInput
    this.changeBtnActive()
    this.httpRequestsService.sendCalculationInfo(
      (this.calculationInputs)
      );
  }

  changeOfNumOfMonths(numChange) {
    this.numOfMOnthsInput = Number(numChange.target.value);
    this.calculationInputs.numOfMonths = this.numOfMOnthsInput
    this.changeBtnActive()
    this.httpRequestsService.sendCalculationInfo(
      (this.calculationInputs)
      );
  }

  changeBtnActive() {
    if (this.amountInput && this.numOfMOnthsInput) {
      this.btnActive = true;
      } else {
        this.btnActive = false;
      }
  }

}
