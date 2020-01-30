import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgZoneDemoComponent } from './ng-zone-demo/ng-zone-demo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, NgZoneDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
