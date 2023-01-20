import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, combineLatest, map} from 'rxjs';
import { JobWithTagsQueryModel } from '../../query-models/job-with-tags.query-model';
import { JobService } from '../../services/job.service';
import { JobModel } from "../../models/job.model";
import { JobTagModel } from "../../models/job-tag.model";

@Component({
  selector: 'app-query-single-job',
  templateUrl: './query-single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleJobComponent {

  jobWithTags$: Observable<JobWithTagsQueryModel[]> = combineLatest([
    this._jobService.getAllJobs(),
    this._jobService.getAllJobTags()
  ]).pipe(
    map(([jobs, jobTags]: [JobModel[], JobTagModel[]]) =>
      this._mapToJobWithTagsQuery(jobs, jobTags))
  )

  constructor(private _jobService: JobService) {
  }

  private _mapToJobWithTagsQuery(jobs: JobModel[], jobTags: JobTagModel[]): JobWithTagsQueryModel[] {
    const jobTagsMap = jobTags.reduce((a, c) => {
      return {...a, [c.id]: c}
    }, {}) as Record<string, JobTagModel>

    return jobs.map((job) => {
      return ({
        title: job.title,
        tagNames: job.jobTagIds.map((jId) => jobTagsMap[jId].name)
      })
    })
  }
}
