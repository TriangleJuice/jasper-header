/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HeaderModule }  from 'jasper-header';

@Component({
  selector: 'app',
  template: `<header-component></header-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, HeaderModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
