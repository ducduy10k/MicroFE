import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
