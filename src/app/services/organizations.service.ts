import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin, map, Observable} from 'rxjs';
import { OrganizationModel } from '../models/organization.model';
import { TeamModel } from '../models/team.model';

@Injectable()
export class OrganizationsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllOrgs(): Observable<OrganizationModel[]> {
    return this._httpClient.get<OrganizationModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/organizations');
  }

  // getAllOrgTeams(orgIds: string[]): Observable<TeamModel[][]> {
  //   return forkJoin(
  //     orgIds.map((id) =>
  //       this._httpClient.get<TeamModel[]>(
  //         `https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${id}/teams`
  //       )
  //     )
  //   )
  // }

  getAllOrgTeams(ids: string[]): Observable<Record<string, TeamModel[]>> {
    return forkJoin(
      ids.map((id) =>
        this._httpClient.get<TeamModel[]>(
          `https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${id}/teams`
  )
  )
  ).pipe(
      map((orgWithTeams: TeamModel[][]) =>
        orgWithTeams.reduce(
          (a, c, idx) => ({
            ...a,
            [ids[idx]]: c
          }),
          {} as Record<string, TeamModel[]>
        )
      )
    );
  }
}
