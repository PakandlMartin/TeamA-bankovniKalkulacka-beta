import {Component, Input, OnInit, DoCheck} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserInfoService} from "../../user-info.service";
import {HttpRequestsService} from "../../http-requests.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements  DoCheck {
 @Input() id: number;


  client: {position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string,
    companyName: string, applicantType: string};

/* data: [
    {position: string, amount: number, numOfMonths: number, created: string,
      status: string, id: string, name: string, surname: string,
      companyName: string, applicantType: string}
  ];

 */

  clients: [{position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string,
    companyName: string, applicantType: string}

  ]


  constructor(private route: ActivatedRoute, private userInfoService: UserInfoService,
              private httpRequestService: HttpRequestsService, private authService: AuthService) { }

   ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.authService.id = this.id;
          this.authService.displayRequests();
            this.client = this.authService.data[this.authService.id];
          });
        }


  ngDoCheck () {

  }


}
