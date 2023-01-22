import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryMultiNestedOrgsComponent } from './components/query-multi-nested-orgs/query-multi-nested-orgs.component';
import { QueryMultiNestedOrgsComponentModule } from './components/query-multi-nested-orgs/query-multi-nested-orgs.component-module';
import { OrganizationsServiceModule } from './services/organizations.service-module';
import { UsersWithAvatarsServiceModule } from './services/users-with-avatars.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-multi-nested-orgs', component: QueryMultiNestedOrgsComponent }]), QueryMultiNestedOrgsComponentModule, OrganizationsServiceModule, UsersWithAvatarsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
