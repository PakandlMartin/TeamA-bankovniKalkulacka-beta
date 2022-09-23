import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() client;

  constructor() { }

  ngOnInit(): void {
  }

}
