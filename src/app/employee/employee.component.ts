import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from "../http-requests.service";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    data: [
      {position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string,
      companyName: string, applicantType: string}
    ];


  constructor (private httpRequestService: HttpRequestsService) {

  }


  ngOnInit(): void {
  }

  displayRequests() {
     this.httpRequestService.showClients().subscribe(responseData => {
       this.data = responseData;
     });

  }



}
