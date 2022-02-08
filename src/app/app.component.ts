import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'libary';

  form: FormGroup;

  TypeFC:FormControl
  LangueFC:FormControl
  CategorieFC:FormControl
  NoteFC:FormControl

  livre:any
  dvd:any
  francais:any
  anglais:any
  Litteraturefrancaise:any
  Litteratureetrangere:any






  constructor(fb:FormBuilder){
    this.form = fb.group({
      'type': this.TypeFC,
      'categorie':this.CategorieFC,
      'langue':this.LangueFC,
      'note':this.NoteFC
    });

  }


ngOnInit(){

  this.TypeFC= new FormControl('');
  this.LangueFC= new FormControl('');
  this.CategorieFC= new FormControl('');
  this.NoteFC= new FormControl('');

}


onSubmit(){
  console.log(this.form)
}
}
