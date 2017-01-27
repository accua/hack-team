import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { AboutComponent } from './about/about.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

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
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'roster-edit',
    component: EditMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
