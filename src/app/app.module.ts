import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { AdminFamilyService } from './service/admin-family.service';

@NgModule({
  declarations: [
    AppComponent,
    FamilyListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AdminFamilyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
