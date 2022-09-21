import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  monthly = this.onCalculate(50000, 12)
  total = this.calculateTotal(this.monthly, 12)

  onCalculate (amount: number, length: number) {
    const urok: number = 0.5 * amount;
    let total: number = amount + urok;
    return total / length;
  }

  calculateTotal (monthly: number, length: number) {
    return monthly * length;
  }

}
