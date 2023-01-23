import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { QueryStringMultiUserComponent } from './query-string-multi-user.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, FlexModule],
  declarations: [QueryStringMultiUserComponent],
  providers: [],
  exports: [QueryStringMultiUserComponent]
})
export class QueryStringMultiUserComponentModule {
}
