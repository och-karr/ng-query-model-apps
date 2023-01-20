import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuerySingleUserComponent } from './components/query-single-user/query-single-user.component';
import { QuerySingleJobComponent } from './components/query-single-job/query-single-job.component';
import { QuerySingleUserComponentModule } from './components/query-single-user/query-single-user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { RoleServiceModule } from './services/role.service-module';
import { QuerySingleJobComponentModule } from './components/query-single-job/query-single-job.component-module';
import { JobServiceModule } from './services/job.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-single-user', component: QuerySingleUserComponent }, { path: 'query-array-single-job', component: QuerySingleJobComponent }]), QuerySingleUserComponentModule, UserServiceModule, RoleServiceModule, QuerySingleJobComponentModule, JobServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
