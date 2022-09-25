import {Component, Input, OnInit} from '@angular/core';
import {HttpRequestsService} from "../http-requests.service";
import {AuthService} from "../auth/auth.service";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input()  data: [
      {position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string,
      companyName: string, applicantType: string}
    ];


  constructor (private httpRequestService: HttpRequestsService, private authService: AuthService) {

  }


  ngOnInit(): void {
    this.authService.isLoggedIn();
  }

  displayRequests() {
     this.authService.showClients().subscribe(responseData => {
       this.data = responseData;
     });

  }



}
