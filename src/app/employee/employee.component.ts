import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  client = {type: 'privatePerson', name: 'Petr', surname: 'Novák'}


  ngOnInit(): void {
  }


}
