import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserInfoService} from "../../user-info.service";
import {HttpRequestsService} from "../../http-requests.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  id: number;
  client: {};

  data: [
    {position: string, amount: number, numOfMonths: number, created: string,
      status: string, id: string, name: string, surname: string,
      companyName: string, applicantType: string}
  ];

  constructor(private route: ActivatedRoute, private userInfoService: UserInfoService,
              private httpRequestService: HttpRequestsService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );
  }

  displayClients() {
    this.httpRequestService.showClients().subscribe(responseData => {
      this.data = responseData;
    });

  }

  getClient(index: number) {
    return this.data[index].surname;
  }

}
