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

  constructor(private collegueSvr:DataService) { }

  ngOnInit(): void {

    this.collegueSvr.subscribToSubjectCollegue().subscribe(
      value=>this.collegues=value,

      error=>console.log("erreur : ",error),
      ()=>{}
    );













}
}
