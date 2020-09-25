import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-collegue',
  templateUrl: './list-collegue.component.html',
  styleUrls: ['./list-collegue.component.scss']
})
export class ListCollegueComponent implements OnInit {

@Input() listUser:any[];

  constructor() { }


  addUser(){
    console.log("ajouter User");

  }
  editUser(){
    console.log("editer");

  }




  ngOnInit(): void {
  }

}
