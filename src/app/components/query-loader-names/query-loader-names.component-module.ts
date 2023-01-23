import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { QueryLoaderNamesComponent } from './query-loader-names.component';
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatProgressSpinnerModule, CommonModule, MatListModule, MatButtonModule],
  declarations: [QueryLoaderNamesComponent],
  providers: [],
  exports: [QueryLoaderNamesComponent]
})
export class QueryLoaderNamesComponentModule {
}
