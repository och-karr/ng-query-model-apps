import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { OrganizationsService } from '../../services/organizations.service';
import { UsersWithAvatarsService } from '../../services/users-with-avatars.service';
import {combineLatest, map, Observable, switchMap, tap} from "rxjs";
import {UserWithAvatarModel} from "../../models/user-with-avatar.model";
import {TeamModel} from "../../models/team.model";
import {OrganizationQueryModel} from "../../query-models/organization.query-model";
import {TeamQueryModel} from "../../query-models/team.query-model";

@Component({
  selector: 'app-query-multi-nested-orgs',
  templateUrl: './query-multi-nested-orgs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryMultiNestedOrgsComponent {
  readonly orgs$: Observable<OrganizationQueryModel[]> = combineLatest([
    this._organizationsService.getAllOrgs(),
    this._usersWithAvatarsService.getAll()
  ]).pipe(
    switchMap(([orgs, users]) =>
      this._organizationsService.getAllOrgTeams(orgs.map((org) => org.id)).pipe(
        map((teamMap) =>
          orgs.map((org) => ({
            name: org.name,
            teams: this.mapToTeamQuery(teamMap[org.id], users)
          }))
        )
      )
    ),
    tap(console.log)
  )

  mapToTeamQuery(teams: TeamModel[], users: UserWithAvatarModel[]): TeamQueryModel[] {
    const userMap = users.reduce((a, c) => ({...a, [c.id]: c}), {}) as Record<string, UserWithAvatarModel>;

    return teams.map((t) => ({
      name: t.name,
      members: t.userIds.map((uId: string) => ({
        avatarUrl: userMap[uId]?.avatar
      }))
    }))
  }

  constructor(private _organizationsService: OrganizationsService, private _usersWithAvatarsService: UsersWithAvatarsService) {
  }
}
