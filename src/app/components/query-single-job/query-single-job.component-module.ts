import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { QuerySingleJobComponent } from './query-single-job.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [QuerySingleJobComponent],
  providers: [],
  exports: [QuerySingleJobComponent]
})
export class QuerySingleJobComponentModule {
}
