import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { MaterialModule } from 'src/modules/material/material.module'

import * as commonComponents from './components'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ...commonComponents.conmponents,
  ],
  entryComponents: [
    commonComponents.entryComponents
  ],
  imports: [
    CommonModule,
    AppCommonRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    ...commonComponents.conmponents
  ]
})
export class AppCommonModule { }
