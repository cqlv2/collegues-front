import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../model/collegue';


@Component({
  selector: 'app-heafer',
  templateUrl: './heafer.component.html',
  styleUrls: ['./heafer.component.scss']
})
export class HeaferComponent implements OnInit {

  title = 'collegues-front-API';
  rechercheValue="";
  typeRecherche="nom";

  constructor(private collegueSvr:DataService) { }

  ngOnInit(): void {
  }

  recherche(){
    this.collegueSvr.getCollegueBy(this.rechercheValue,this.typeRecherche).subscribe(
      value=>this.collegueSvr.sendCollegueToSubject(value),
      error=>console.log("erreur : "+error),
      ()=>{}
    );
  }

}
