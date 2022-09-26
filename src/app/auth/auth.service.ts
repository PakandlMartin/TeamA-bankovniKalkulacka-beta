import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResponseData} from "../http-requests.service";

//subscribe v employee detail, zde observable, při změně vzít id z routy a přenačíst s novými daty

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedIn = new BehaviorSubject(false);
  public loggedIn = this._loggedIn.asObservable();

  id: number;


  token = "qdsMkMpb16";
  myToken: string;

  dataToLoad: Observable<{position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string,
    companyName: string, applicantType: string}>;



  data: [
    {position: string, amount: number, numOfMonths: number, created: string,
      status: string, id: string, name: string, surname: string,
      companyName: string, applicantType: string}
  ];

  clients: [{position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string,
    companyName: string, applicantType: string}

  ]

  client: {position: string, amount: number, numOfMonths: number, created: string,
    status: string, id: string, name: string, surname: string,
    companyName: string, applicantType: string};

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

  sortBySurname() {
    this.data = this.data.sort(this.compareSurnames);
  }

  compareSurnames(a, b) {
    const surname1 = a.surname.toUpperCase();
    const surname2 = b.surname.toUpperCase();

    let comparison = 0;

    if (surname1 > surname2) {
      comparison = 1;
    } else if (surname1 < surname2) {
      comparison = -1;
    }
    return comparison;
  }


  compareAmount(a, b) {
    return a.amount - b.amount;
  }

  sortByAmount() {
      this.clients = this.data.sort(this.compareAmount);
  }


}
