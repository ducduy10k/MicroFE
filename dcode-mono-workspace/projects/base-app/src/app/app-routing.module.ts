import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAppComponent } from './base-app/base-app.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/base-app',
  pathMatch: 'full'
},{
  path: 'base-app',
  component: BaseAppComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
