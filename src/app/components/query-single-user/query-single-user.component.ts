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
      return users.map(user => {
        let currRole = roles.find(role => role.id === user.roleId);
        // console.log(currRole);
        return {
          email: user.email,
          role: currRole ? currRole.role : ''
        }
      })
    })
  )

  constructor(private _userService: UserService, private _roleService: RoleService) {}

}
