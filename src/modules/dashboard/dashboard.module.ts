import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import * as dashboardComponents from './components';
import { AppCommonModule } from '../app-common/app-common.module';
import { MaterialModule } from '../material/material.module';
import { GridManagerComponent } from './components/grid-manager/grid-manager.component';
import { BoxAComponent } from './components/box-a/box-a.component';
import { BoxBComponent } from './components/box-b/box-b.component';
import { BoxFComponent } from './components/box-f/box-f.component';
import { BoxCComponent } from './components/box-c/box-c.component';
import { BoxDComponent } from './components/box-d/box-d.component';
import { BoxEComponent } from './components/box-e/box-e.component';
import { BoxGComponent } from './components/box-g/box-g.component';
import { BoxHComponent } from './components/box-h/box-h.component';


@NgModule({
  declarations: [
    ...dashboardComponents.components,
    GridManagerComponent,
    BoxAComponent,
    BoxBComponent,
    BoxFComponent,
    BoxCComponent,
    BoxDComponent,
    BoxEComponent,
    BoxGComponent,
    BoxHComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    MaterialModule
  ]
})
export class DashboardModule { }
