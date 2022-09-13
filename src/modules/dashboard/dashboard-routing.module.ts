import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent, DashboardMainComponent } from './components';

const routes: Routes = [
  {
    path: 'home', component: DashboardMainComponent, data : {title:"Dashboard"}
  },
  {
    path: '', redirectTo: 'dashboard/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'dashboard/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
