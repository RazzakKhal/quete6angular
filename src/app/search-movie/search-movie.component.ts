import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyValidators } from '../my-validators';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {

  myForm;


  constructor(formBuilder : FormBuilder, validators : MyValidators){
this.myForm = formBuilder.group({
  idOrTitle : formBuilder.group({
    id : [''],
    title : ['']
  }),
  typeSelect : [''],
  ficheSelect : [''],
  annee : ['', validators.rangeDateValidator(1900, new Date().getFullYear())]
});

this.myForm.controls.idOrTitle.setValidators(validators.isRequiredValidator(this.myForm.controls.idOrTitle.controls.title, this.myForm.controls.idOrTitle.controls.id));

this.valueDone();
  }



  // Mettre la valeur initial de type et select via patchvalue
  valueDone(){
    this.myForm.patchValue({
      typeSelect : "serie",
      ficheSelect : "courte"
    })
  }

afficheForm(){
console.log(JSON.stringify(this.myForm.getRawValue()));
}
}
