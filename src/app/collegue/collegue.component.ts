import { Component, Input, OnInit } from '@angular/core';
import {Collegue} from '../model/collegue';
import{ DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  collegues: Collegue;
  fieldImg=false;
  fieldEmail=false;
  newUrl="";
  newEmail="";
  success=false;

  constructor(private collegueSvr:DataService) { }

  ngOnInit(): void {

    this.collegueSvr.subscribToSubjectCollegue().subscribe(
      value=>this.collegues=value,

      error=>console.log("erreur : ",error),
      ()=>{}
    );
  }

  editImg(collegue){
    this.newEmail=collegue.email;
    this.newUrl=collegue.photoUrl;
    this.fieldImg=true;
  }

  editMail(collegue){
    this.newEmail=collegue.email;
    this.newUrl=collegue.photoUrl;
    this.fieldEmail=true;
  }

  editerCollegue(collegue){
    collegue.photoUrl=this.newUrl;
    collegue.email=this.newEmail;
    this.collegueSvr.edit(collegue).subscribe(
      value=>this.editSuccess(value),
      error=>console.log("erreur : ",error),
      ()=>{}
    );
  }

  editSuccess(collegue){
    this.success=true;
    setTimeout(() => {this.success=false;}, 5000);
    this.collegueSvr.getCollegueBy(collegue.id,"id").subscribe(
      value=>this.collegueSvr.sendCollegueToSubject(value),
      error=>console.log("Erreur",error),
      ()=>{},
    );
    this.fieldImg=false;
    this.fieldEmail=false;
  }

}
