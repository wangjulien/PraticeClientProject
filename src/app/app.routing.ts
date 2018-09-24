import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyUpdateComponent } from './family-update/family-update.component';

const appRoutes: Routes = [
  { path: 'family-list', component: FamilyListComponent },
  { path: 'family-update', component: FamilyUpdateComponent },
  { path: '**', redirectTo: 'family-list' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
