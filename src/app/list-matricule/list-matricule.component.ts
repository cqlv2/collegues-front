import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-list-matricule',
  templateUrl: './list-matricule.component.html',
  styleUrls: ['./list-matricule.component.scss']
})
export class ListMatriculeComponent implements OnInit {

  matriculesList:any[]=[];

  constructor(private collegueSvr:DataService) {
    this.collegueSvr.getMatricules()
    .subscribe(
      value=>this.matriculesList=value,
      error=>console.log("erreur : ",error),
      ()=>{}
    );
  }

  ngOnInit(): void {

  }

  afficherCollegue(matricule){
      this.collegueSvr.getCollegueBy(matricule,"matricule").subscribe(
        value=>this.collegueSvr.sendCollegueToSubject(value),
        error=>console.log("erreur : ",error),
        ()=>{},
      );
  }
}
