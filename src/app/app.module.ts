import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ListCollegueComponent } from './list-collegue/list-collegue.component'
import{ HttpClientModule }from '@angular/common/http';
import { ListMatriculeComponent } from './list-matricule/list-matricule.component';
import { HeaferComponent } from './heafer/heafer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AjouterCollegueComponent } from './ajouter-collegue/ajouter-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    ListCollegueComponent,
    ListMatriculeComponent,
    HeaferComponent,
    AjouterCollegueComponent,
    UrlValidatorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
