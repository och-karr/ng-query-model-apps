import { Injectable } from '@angular/core';
import {delay, map, Observable, of} from "rxjs";

@Injectable()
export class SlowDataService {
  getNames(): Observable<string[]> {
    return of(['Tom', 'Kate', 'Rob', 'Steph']).pipe(
      delay(2000),
      map((names) => {
        if (Math.random() > .5) {
          throw new Error('Random error');
        }
        return names;
      })
    )
  }
}
