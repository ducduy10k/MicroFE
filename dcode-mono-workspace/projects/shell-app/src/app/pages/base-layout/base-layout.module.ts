import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
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
                exposedModule: './BaseAppModule'
              }).then(m=>m.BaseAppModule)
              .catch(err=>console.log(err));
            }
          }
        ]
      },
    ])
  ]
})
export class BaseLayoutModule { }
