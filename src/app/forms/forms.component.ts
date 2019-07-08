import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  checkedForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkedForm = formBuilder.group({
      nickname: ['', [Validators.minLength(2),  Validators.required, this.forbiddenName()]],
      email: ['', [Validators.email, Validators.required]],
      website: ['',[Validators.required]],
      password: ['' ,[Validators.required],[Validators.pattern('[a-zA-Z0-9]+$')]],
      cpassword: ['' ,[Validators.required]],
      number: ['',[Validators.required]],
      agree: [false,  [Validators.requiredTrue]]
    },{validator: this.match})
  }

  ngOnInit() {
  }

  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'Roman' ? { forbidden: { invalid: true } } : null;
    };
  }


  match(pass) {
    if (pass.get('password').value !== pass.get('cpassword').value) {
        return {invalid: true};
    }
}
  onSubmit() {
    console.log(this.checkedForm.value);
  }


  get name() {
    return this.checkedForm.get('name') as FormControl;
  }
}
