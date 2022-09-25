import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResponseData} from "../http-requests.service";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedIn = new BehaviorSubject(false);
  public loggedIn = this._loggedIn.asObservable();

  token = "qdsMkMpb16";
  myToken: string;

  data: [
    {position: string, amount: number, numOfMonths: number, created: string,
      status: string, id: string, name: string, surname: string,
      companyName: string, applicantType: string}
  ];

  constructor(private http:HttpClient ) {}

  isLoggedIn() {
    const userData = JSON.parse(localStorage.getItem('employeeData'));
    this._loggedIn.next(userData !== undefined);
    return userData !== undefined;

  }

  login(login: string, password: string) {
    let codedData = btoa (login + ':' + password);
    return this.http.get<AuthResponseData>('http://localhost:8000/login',
      {headers: new HttpHeaders({
          Authorization: 'Basic ' + codedData
        })}).pipe(tap(responseData => {
      this.myToken = responseData.token
    }));
  }


  showClients(): Observable<[{position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string, companyName: string, applicantType: string}]> {
    return this.http.get<any>('http://localhost:8000/request/list',
      {headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.myToken
        })})
  }


  getClient(index: number) {
    return this.data[index];
  }

  displayRequests() {
    this.showClients().subscribe(responseData => {
      this.data = responseData;
    });
  }

}
