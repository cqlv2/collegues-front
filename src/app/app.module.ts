import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListCollegueComponent } from './list-collegue/list-collegue.component'
import{ HttpClientModule }from '@angular/common/http';
import { ListMatriculeComponent } from './list-matricule/list-matricule.component';
import { HeaferComponent } from './heafer/heafer.component';
import { FormsModule } from '@angular/forms';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    ListCollegueComponent,
    ListMatriculeComponent,
    HeaferComponent,
    AjouterCollegueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
