import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { AboutComponent } from './about/about.component';
import { NewMemberComponent } from './new-member/new-member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'new-member',
    component: NewMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
