import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Collegue} from '../model/collegue';



@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.scss']
})
export class AjouterCollegueComponent implements OnInit {

  newNom="aze";
  newPrenom="";
  newEmail="";
  newBirthDate="2021-12-12";
  newUrl="";

  constructor(private collegueSvr:DataService) { }

  ngOnInit(): void {
  }

ajouterCollegue(){

 let newCollegue=new Collegue(null,null,this.newNom,this.newPrenom,this.newEmail,new Date(this.newBirthDate),this.newUrl);
  this.collegueSvr.add(newCollegue).subscribe(
    value=>this.collegueSvr.sendCollegueToSubject(value),
    error=>console.log("erreur : ",error),
    ()=>{}
  );

}


}
