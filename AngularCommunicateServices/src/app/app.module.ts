import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoAComponent } from './components/hijo-a/hijo-a.component';
import { HijoBComponent } from './components/hijo-b/hijo-b.component';
import { NietoAComponent } from './components/nieto-a/nieto-a.component';
import { NietoBComponent } from './components/nieto-b/nieto-b.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoAComponent,
    HijoBComponent,
    NietoAComponent,
    NietoBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
