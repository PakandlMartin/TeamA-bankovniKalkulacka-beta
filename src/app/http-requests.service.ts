import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestsService {

  sendCalculationInfo(calculationInputsInfo:any) {


    console.log(
      calculationInputsInfo
    )
  }

}


