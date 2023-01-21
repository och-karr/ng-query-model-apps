import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryLoaderNamesComponent } from './components/query-loader-names/query-loader-names.component';
import { QueryLoaderNamesComponentModule } from './components/query-loader-names/query-loader-names.component-module';
import { SlowDataServiceModule } from './services/slow-data.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-loader-names', component: QueryLoaderNamesComponent }]), QueryLoaderNamesComponentModule, SlowDataServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
