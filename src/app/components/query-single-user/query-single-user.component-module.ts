import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { QuerySingleUserComponent } from './query-single-user.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
    imports: [MatListModule, CommonModule, MatTableModule],
  declarations: [QuerySingleUserComponent],
  providers: [],
  exports: [QuerySingleUserComponent]
})
export class QuerySingleUserComponentModule {
}
