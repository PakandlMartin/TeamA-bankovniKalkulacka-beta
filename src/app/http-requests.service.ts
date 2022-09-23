import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {map, Observable, Subject, Subscription, tap,} from "rxjs";

export interface AuthResponseData {
  login: string,
  name: string,
  roles: [string],
  token: string
}



export interface GetResponseData {
  position: string,
  amount: number,
  numOfMonths: number,
  created: '',
  status: string,
  id: string,
  name: string,
  surname: string,
  companyName: string,
  applicantType: string
}


@Injectable({providedIn: 'root'})
export class HttpRequestsService {

  error = new Subject;
  calculationInfo: object = {};
  infoAboutUser: object = {};
  token = "qdsMkMpb16";
  myToken: string;

  constructor(private http:HttpClient) {}

  postCalculationInfo(calculationInputsInfo:any) {
    const httpPostBody = calculationInputsInfo;
    this.http
    .post<{name: string}>(
      'http://localhost:8000/request/calculate ',
      httpPostBody, {
        observe: 'response'
      }
      )
      .subscribe(responseData => {
        this.calculationInfo = responseData.body
        // return responseData.body
      }, error => {
        this.error.next(error.message);
      });
    }

  postInfoAboutUser(infoAboutUserInput: any) {
    const httpPostBody = infoAboutUserInput;
    this.http
    .post(
      'http://localhost:8000/request/create',
      httpPostBody, {
        observe: 'response'
      }
    ).subscribe(responseData => {
console.log(responseData.body)
    }), error => {
      this.error.next(error.message)
    }
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


  showClients(): Observable<any> {
     return this.http.get<any>('http://localhost:8000/request/list',
      {headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.myToken
        })})
  }

}




