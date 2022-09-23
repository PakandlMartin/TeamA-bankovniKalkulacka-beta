import { Component, OnInit } from '@angular/core';
import {HttpRequestsService} from "../http-requests.service";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  token = "qdsMkMpb16";
  data: {
    position: string,
    amount: number,
    numOfMonths: string,
    created: string,
    status: string,
    id: string,
    name: string,
    surname: string,
    companyName: string,
    applicantType: string
  };


  constructor (private httpRequestService: HttpRequestsService) {

  }


  ngOnInit(): void {
  }

  displayRequests() {
     this.httpRequestService.showClients().subscribe(responseData => {
       this.data = responseData;
       console.log(responseData);
     });

  }



}
