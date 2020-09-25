import { Component } from '@angular/core';
import {userMock}from './mock/user.mock';
import {DataService} from './services/data.service';
import {Collegue} from './model/collegue';

import {Observable} from 'rxjs'
import { HttpClient, HttpResponse,HttpErrorResponse } from "@angular/common/http";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

constructor(private dataService:DataService){
}

// .subscribe((response:HttpResponse<Collegue>)=>{
//   return response.body;
// },(error:HttpErrorResponse)=>{console.log("erreur : ",error);});

colleguesRxjs:Collegue[]









}
