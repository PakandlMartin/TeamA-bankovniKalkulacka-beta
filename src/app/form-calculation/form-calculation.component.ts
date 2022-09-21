import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-form-calculation',
  templateUrl: './form-calculation.component.html',
  styleUrls: ['./form-calculation.component.css']
})
export class FormCalculationComponent implements OnInit {
infoAboutCalculation: FormGroup;
btnDisabled = true;

constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

private initForm() {
  let amount = '';
  let dueDate = '';

  this.infoAboutCalculation = new FormGroup({
    'amount' : new FormControl(amount, Validators.required),
    'dueDate' : new FormControl(dueDate, Validators.required)
  });
};

onSubmit() {
  console.log(this.infoAboutCalculation)
}




}
