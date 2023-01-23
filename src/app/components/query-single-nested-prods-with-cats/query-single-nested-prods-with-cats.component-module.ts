import { NgModule } from '@angular/core';
import { QuerySingleNestedProdsWithCatsComponent } from './query-single-nested-prods-with-cats.component';
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    MatChipsModule,
    CommonModule
  ],
  declarations: [QuerySingleNestedProdsWithCatsComponent],
  providers: [],
  exports: [QuerySingleNestedProdsWithCatsComponent]
})
export class QuerySingleNestedProdsWithCatsComponentModule {
}
