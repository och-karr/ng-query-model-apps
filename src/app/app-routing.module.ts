import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {QuerySingleUserComponent} from './components/query-single-user/query-single-user.component';
import {QuerySingleJobComponent} from './components/query-single-job/query-single-job.component';
import {QueryStringMultiUserComponent} from './components/query-string-multi-user/query-string-multi-user.component';
import {QuerySingleUserComponentModule} from './components/query-single-user/query-single-user.component-module';
import {UserServiceModule} from './services/user.service-module';
import {RoleServiceModule} from './services/role.service-module';
import {QuerySingleJobComponentModule} from './components/query-single-job/query-single-job.component-module';
import {JobServiceModule} from './services/job.service-module';
import {
  QueryStringMultiUserComponentModule
} from './components/query-string-multi-user/query-string-multi-user.component-module';
import {DepartmentServiceModule} from './services/department.service-module';

import { QueryLoaderNamesComponent } from './components/query-loader-names/query-loader-names.component';
import { QueryLoaderNamesComponentModule } from './components/query-loader-names/query-loader-names.component-module';
import { SlowDataServiceModule } from './services/slow-data.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'query-single-user',
    component: QuerySingleUserComponent
  }, {path: 'query-array-single-job', component: QuerySingleJobComponent}, {
    path: 'query-string-multi-user',
    component: QueryStringMultiUserComponent
  }, { path: 'query-loader-names', component: QueryLoaderNamesComponent }]), QuerySingleUserComponentModule, UserServiceModule, RoleServiceModule, QuerySingleJobComponentModule, JobServiceModule, QueryStringMultiUserComponentModule, DepartmentServiceModule, QueryLoaderNamesComponentModule, SlowDataServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
