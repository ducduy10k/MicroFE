import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseAppModule } from './base-app/base-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BaseAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
