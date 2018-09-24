import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { AdminFamilyService } from './service/admin-family.service';
import { FamilyUpdateComponent } from './family-update/family-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyListComponent,
    FamilyUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
    AdminFamilyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
