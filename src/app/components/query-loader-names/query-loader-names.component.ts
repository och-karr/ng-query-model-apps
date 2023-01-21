import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, startWith, switchMap} from 'rxjs';
import { SlowDataService } from '../../services/slow-data.service';
import {HttpErrorResponse} from "@angular/common/http";
// import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-query-loader-names',
  templateUrl: './query-loader-names.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryLoaderNamesComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  constructor(private _slowDataService: SlowDataService) {
  }

  public refresh$: Observable<{
    isLoading: boolean;
    value?: string[];
    error?: HttpErrorResponse | Error;
  }> = this._refreshSubject.asObservable().pipe(
    switchMap(() =>
      this._slowDataService.getNames().pipe(
        map((value) => ({ isLoading: false, value: value })), //hax żeby startWith zadziałał
        startWith({ isLoading: true }),
        catchError((error) => of({ isLoading: false, error: error }))
      )
    )
  );

  refreshData(): void {
    this._refreshSubject.next(void 0);
  }
}
