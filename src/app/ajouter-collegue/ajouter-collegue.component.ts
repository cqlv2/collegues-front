import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Collegue} from '../model/collegue';
import {Matricule} from '../model/matricule';



@Component({
  selector: 'app-ajouter-collegue',
  templateUrl: './ajouter-collegue.component.html',
  styleUrls: ['./ajouter-collegue.component.scss']
})
export class AjouterCollegueComponent implements OnInit {
  success=false;
  newNom="";
  newPrenom="";
  newEmail="";
  newBirthDate="";
  newUrl="";

  constructor(private collegueSvr:DataService) { }

  ngOnInit(): void {
  }

  ajouterCollegue(){
    let newCollegue=new Collegue(null,null,this.newNom,this.newPrenom,this.newEmail,new Date(this.newBirthDate),this.newUrl);
    this.collegueSvr.add(newCollegue).subscribe(
      value=>this.addSuccess(value),
      error=>console.log("erreur : ",error),
      ()=>{}
    );
  }





  addSuccess(collegue){
    this.success=true;
    setTimeout(() => {this.success=false;}, 5000);
    this.collegueSvr.getCollegueBy(collegue.id,"id").subscribe(
      value=>this.collegueSvr.sendCollegueToSubject(value),
      error=>console.log("Erreur",error),
      ()=>{},
    );

    this.newNom="";
    this.newPrenom="";
    this.newEmail="";
    this.newBirthDate="";
    this.newUrl="";
  }



}
