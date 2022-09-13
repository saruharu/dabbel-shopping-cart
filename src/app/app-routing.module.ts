import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () => import('../modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)

  },
  {
    path: '', redirectTo: 'dashboard/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'dashboard/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
