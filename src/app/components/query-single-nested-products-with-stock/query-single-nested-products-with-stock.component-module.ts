import { NgModule } from '@angular/core';
import { QuerySingleNestedProductsWithStockComponent } from './query-single-nested-products-with-stock.component';
import {CommonModule} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [QuerySingleNestedProductsWithStockComponent],
  providers: [],
  exports: [QuerySingleNestedProductsWithStockComponent]
})
export class QuerySingleNestedProductsWithStockComponentModule {
}
