import {HttpErrorResponse} from "@angular/common/http";

export interface LoaderDataQueryModel {
  isLoading: boolean;
  value?: string[];
  error?: HttpErrorResponse | Error;
}
