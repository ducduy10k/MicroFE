import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAppComponent } from './base-app/base-app.component';

const routes: Routes = [
  { path: '', redirectTo: '/base-app', pathMatch: 'full' },
  {
    path: 'base-app',
    loadChildren: () =>
      import('./base-app/base-app.module').then((m) => m.BaseAppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
