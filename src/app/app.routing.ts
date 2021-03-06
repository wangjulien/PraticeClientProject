import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyUpdateComponent } from './family-update/family-update.component';
import { InscriptionComponent } from './inscription/inscription.component';

const appRoutes: Routes = [
  { path: 'family-list', component: FamilyListComponent },
  { path: 'family-update', component: FamilyUpdateComponent },
  { path: 'family-update/:id', component: FamilyUpdateComponent },
  { path: 'inscription/:id', component: InscriptionComponent },
  { path: '**', redirectTo: 'family-list' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
