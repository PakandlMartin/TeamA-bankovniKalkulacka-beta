import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserInfoService} from "../../user-info.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  id: number;
  client: {};

  constructor(private route: ActivatedRoute, private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.client = this.userInfoService.getClient(this.id);
        }
      );
  }

}
