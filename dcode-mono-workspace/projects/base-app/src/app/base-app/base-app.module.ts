import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAppComponent } from './base-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BaseAppComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: BaseAppComponent,
      },
    ])
  ]
})
export class BaseAppModule { }
