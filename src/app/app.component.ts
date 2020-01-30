import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Ng-zone-demo';
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
      this.form = formBuilder.group( {
        username: ['12345678', [Validators.minLength(8), Validators.required] ],
      })
  }

  ngOnInit() {
    setTimeout(() => {
    this.form.get('username').setValue('87654321');
    }, 2000);
  }
}
