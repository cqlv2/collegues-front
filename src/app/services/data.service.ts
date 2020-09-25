import { Injectable } from '@angular/core';
import {userMock}from '../mock/user.mock'
import { Collegue } from '../model/collegue';
import { Matricule } from '../model/matricule';
import { Observable, Subject } from 'rxjs';
import{ environment }from '../../environments/environment';
import { HttpClient, HttpResponse,HttpErrorResponse, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiCollegue = environment.backendUrl;
  subjectCollegue=new Subject<Collegue>();

  constructor(private _http:HttpClient) {}

//#########################  tp  #########################

// fetch
getMatricules():Observable<Matricule[]>{
  return this._http.get<Matricule[]>(environment.backendUrl+"/matricule");
}

getCollegueBy(value:string, type:string):Observable<Collegue>{
  return this._http.get<Collegue>(environment.backendUrl+"/collegue?type="+type+"&value="+value);
}

add(newCollegue):Observable<Collegue>{
 let httpOption={headers: new HttpHeaders({"Content-Type":"application/json"})};
  let corps={
    "nom": newCollegue.nom,
    "prenom": newCollegue.prenoms,
    "email": newCollegue.email,
    "dateNaissance": newCollegue.dateDeNaissance,
    "photoUrl": newCollegue.photoUrl
  };

  return this._http.post<Collegue>(environment.backendUrl+"/collegue",corps, httpOption);
}

// publication
sendCollegueToSubject(collegue: Collegue): void {
  this.subjectCollegue.next(collegue);
}

//abonement
subscribToSubjectCollegue(): Observable<Collegue> {
  return this.subjectCollegue.asObservable();
}

}
