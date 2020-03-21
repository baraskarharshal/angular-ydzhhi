import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  submitted = false;
  form: FormGroup;
  genders = [
    {id: 1, label: 'Male'},
    {id: 2, label: 'Female'},
    {id: 3, label: 'None'},
  ];
  user1 = {
    name: 'Iron man',
    email: 'iron@man.com',
    age: 30,
    gender: 1
  };
  user2 = {
    name: '',
    email: '',
    age: 0,
    gender: 2
  }
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  get fm(){return this.form.controls;}

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.printModal();
  }

  reset(){
    this.form.reset();
  }

  patchUser(userId){
    if(userId === 1){
      this.form.patchValue(this.user1);
    } else {
      this.form.patchValue(this.user2);
    }
  }

  printModal(){
    console.log(this.form.getRawValue());
  }
}
