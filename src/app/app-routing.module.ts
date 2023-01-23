import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QueryMultiNestedOrgsComponent } from './components/query-multi-nested-orgs/query-multi-nested-orgs.component';
import { QuerySingleNestedProductsWithStockComponent } from './components/query-single-nested-products-with-stock/query-single-nested-products-with-stock.component';
import { QueryMultiNestedOrgsComponentModule } from './components/query-multi-nested-orgs/query-multi-nested-orgs.component-module';
import { OrganizationsServiceModule } from './services/organizations.service-module';
import { UsersWithAvatarsServiceModule } from './services/users-with-avatars.service-module';
import { QuerySingleNestedProductsWithStockComponentModule } from './components/query-single-nested-products-with-stock/query-single-nested-products-with-stock.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'query-multi-nested-orgs', component: QueryMultiNestedOrgsComponent }, { path: 'query-single-nested', component: QuerySingleNestedProductsWithStockComponent }]), QueryMultiNestedOrgsComponentModule, OrganizationsServiceModule, UsersWithAvatarsServiceModule, QuerySingleNestedProductsWithStockComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
