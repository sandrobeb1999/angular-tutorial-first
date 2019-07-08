import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  items;
  checkedForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkedForm = formBuilder.group({
      nickname: ['', [Validators.minLength(2), this.forbiddenName()]],
    })
  }

  ngOnInit() {
  }



  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'Roman' ? { forbidden: { invalid: true } } : null;
    };
  }


  onSubmit() {
    console.log(this.checkedForm.value);

    this.checkedForm.reset();
  }


  get name() {
    return this.checkedForm.get('name') as FormControl;
  }
}
