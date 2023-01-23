import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, combineLatest, map} from 'rxjs';
import { RoleService } from '../../services/role.service';
import { UserService } from '../../services/user.service';
import { DepartmentService } from '../../services/department.service';
import {RoleModel} from "../../models/role.model";
import {DepartmentModel} from "../../models/department.model";
import {AdvancedUserQueryModel} from "../../query-models/advanced-user.query-model";
import {UserModel} from "../../models/user.model";

@Component({
  selector: 'app-query-string-multi-user',
  templateUrl: './query-string-multi-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringMultiUserComponent {
  advancedUsers$: Observable<AdvancedUserQueryModel[]> = combineLatest([
    this._userService.getAll(),
    this._roleService.getAll(),
    this._departmentService.getAll()
  ]).pipe(
    map(([users, roles, departments]: [UserModel[], RoleModel[], DepartmentModel[]]) =>
      this._mapToAdvanceUser(users, roles, departments)
    )
  )

  private _mapToAdvanceUser(users: UserModel[], roles: RoleModel[], departments: DepartmentModel[]): AdvancedUserQueryModel[] {
    const rolesMap = roles.reduce((a, c) => {
      return {...a, [c.id]: c}
    }, {}) as Record<number, RoleModel>
    const departmentsMap = departments.reduce((a, c) => {
      return {...a, [c.id]: c}
    }, {}) as Record<string, DepartmentModel>

    return users.map((user) => (
      {
        email: user.email,
        role: rolesMap[user.roleId] && rolesMap[user.roleId].role ? rolesMap[user.roleId].role : '',
        department: departmentsMap[user.departmentId] && departmentsMap[user.departmentId].name ? departmentsMap[user.departmentId].name : ''
      }
    ))
  }

  constructor(private _roleService: RoleService, private _userService: UserService, private _departmentService: DepartmentService) {
  }
}
