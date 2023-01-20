import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, combineLatest, map} from 'rxjs';
import { UserQueryModel } from '../../query-models/user.query-model';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';
import {UserModel} from "../../models/user.model";
import {RoleModel} from "../../models/role.model";

@Component({
  selector: 'app-query-single-user',
  templateUrl: './query-single-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleUserComponent {
  readonly users: Observable<UserQueryModel[]> = combineLatest([
    this._userService.getAll(),
    this._roleService.getAll()
  ]).pipe(
    map(([users, roles]: [UserModel[], RoleModel[]]) => {
      // return users.map(user => {
      //   let currRole = roles.find(role => role.id === user.roleId);
      //   return {
      //     email: user.email,
      //     role: currRole ? currRole.role : ''
      //   }
      // })
      const roleMap = roles.reduce((a, c) => {
        return {...a, [c.id]: c}
      }, {}) as Record<string, RoleModel>

      return users.map(user => ({
          email: user.email,
          role: roleMap[user.roleId] && roleMap[user.roleId].role ? roleMap[user.roleId].role : ''
        })
      )
    })
  )

  constructor(private _userService: UserService, private _roleService: RoleService) {}

}
