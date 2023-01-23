import {TeamQueryModel} from "./team.query-model";

export interface OrganizationQueryModel {
  name: string;
  teams: TeamQueryModel[]
}
