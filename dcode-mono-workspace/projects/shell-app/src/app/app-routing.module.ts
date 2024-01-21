import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/base-layout/components/not-found/not-found.component';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { FooterComponent } from './pages/base-layout/components/footer/footer.component';
import { HeaderComponent } from './pages/base-layout/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'base-app',
        loadChildren: () => {
          return loadRemoteModule({
            remoteName: 'baseApp',
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            exposedModule: './BaseAppModule',
          })
            .then((m) => m.BaseAppModule)
            .catch((err) => console.log(err));
        },
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
