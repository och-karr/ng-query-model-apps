import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { QueryMultiNestedOrgsComponent } from './query-multi-nested-orgs.component';

@NgModule({
  imports: [CommonModule, MatListModule, MatExpansionModule],
  declarations: [QueryMultiNestedOrgsComponent],
  providers: [],
  exports: [QueryMultiNestedOrgsComponent]
})
export class QueryMultiNestedOrgsComponentModule {
}
