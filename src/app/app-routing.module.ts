import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CustomGridComponent } from './customgrid/customgrid.component';
import { CategoryChartComponent } from './categorychart/categorychart.component';
import { MapComponent } from './map/map.component';
import { AwesomeGridComponent } from './awesome-grid/awesome-grid.component';
import { CrmGridComponent } from './crm-grid/crm-grid.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { FintechGridComponent } from './fintech-grid/fintech-grid.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'customgrid', component: CustomGridComponent, data: { text: 'customGrid' } },
  { path: 'customgrid', component: CustomGridComponent, data: { text: 'customGrid' } },
  { path: 'categorychart', component: CategoryChartComponent, data: { text: 'categoryChart' } },
  { path: 'map', component: MapComponent, data: { text: 'map' } },
  { path: 'awesome-grid', component: AwesomeGridComponent, data: { text: 'awesome-grid' } },
  { path: 'crm-grid', component: CrmGridComponent, data: { text: 'crm-grid' } },
  { path: 'login-view', component: LoginViewComponent, data: { text: 'login-view' } },
  { path: 'fintech-grid', component: FintechGridComponent, data: { text: 'fintech-grid' } },
  { path: 'list', component: ListComponent, data: { text: 'list' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
