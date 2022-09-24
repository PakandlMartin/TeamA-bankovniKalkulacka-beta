import { Injectable } from '@angular/core';
import {makeResourceNotFoundError} from "@angular/compiler-cli/src/ngtsc/annotations/component/src/resources";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return userData !== undefined;
  }

}
