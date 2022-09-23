import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
calculationInformation = {
  amount: 0,
  numOfMonths: 0
}

infoAboutUser = {

}
  constructor() { }

  clients = [
    {type: 'privatePerson', name: 'Petr', surname: 'Novák', date: '20.9.2022'},
    {type: 'privatePerson', name: 'Antonín', surname: 'Dvořák'},
    {type: 'privatePerson', name: 'Karolína', surname: 'Smutná'},
    {type: 'privatePerson', name: 'Tomáš', surname: 'Soukup'},
    {type: 'privatePerson', name: 'Karla', surname: 'Antonínová'}
  ]

  getClient (index: number) {
    return this.clients[index];
  }



}
