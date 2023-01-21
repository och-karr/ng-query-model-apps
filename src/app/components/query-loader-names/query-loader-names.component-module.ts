import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QueryLoaderNamesComponent } from './query-loader-names.component';
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatProgressSpinnerModule, CommonModule, MatListModule],
  declarations: [QueryLoaderNamesComponent],
  providers: [],
  exports: [QueryLoaderNamesComponent]
})
export class QueryLoaderNamesComponentModule {
}
