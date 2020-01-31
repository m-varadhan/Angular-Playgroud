import { Component, HostListener } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Random, RandomConfig, RandomGeneratorService } from './random-generator.service';

class ExtendedGeneratorService extends RandomGeneratorService { 
  constructor() {
    super(new RandomConfig(15));
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ {provide: RandomGeneratorService, useClass: ExtendedGeneratorService} ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  form: FormGroup;
  random: Random;

  get username() { return this.form.get('username') }

  constructor(formBuilder: FormBuilder,
   public randomGeneratorService: RandomGeneratorService) {
      this.random = randomGeneratorService.random;
      this.form = formBuilder.group( {
           username: ['12345678', [Validators.minLength(8), Validators.required] ],
      })
  }

  ngOnInit() {
    setTimeout(() => {
    this.form.get('username').setValue('87654321');
    }, 2000);
  }

  onClick() {
    this.randomGeneratorService.generate();
    this.username.setValue(this.random.randomString);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.randomGeneratorService.mouseEventForSeed(e);
  }
}
