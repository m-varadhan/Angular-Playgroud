import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Random, RandomConfig, RandomGeneratorService } from './random-generator.service';

class ExtendedGeneratorService extends RandomGeneratorService { 
  constructor() {
    super(new RandomConfig(15));
  }
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  //providers: [ {provide: RandomGeneratorService, useValue: new RandomGeneratorService(new RandomConfig(15)) }]
  providers: [ {provide: RandomGeneratorService, useClass: ExtendedGeneratorService} ]
})

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
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
