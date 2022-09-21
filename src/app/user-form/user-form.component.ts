import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  @ViewChild('f') signUpForm: NgForm;

  client = {
    type: '',
    name: '',
    surname: '',
    id: '',
    nationality: '',
    email: '',
    phone: '',
    street: '',
    cp: '',
    co: '',
    city: '',
    psc: ''
  };

  constructor() {
  }


  ngOnInit(): void {
  }

}
