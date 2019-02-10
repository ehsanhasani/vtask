import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { JobsService } from './jobs.service';
import { Job } from './job';
import { LoadingService } from '../shared/loading/loading.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  // array of job
  jobs: Job[];
  constructor(private jobsService: JobsService,
              // for show loading when get jobs
              private loadingService: LoadingService,
              // for navigate
              private router: Router,
              // for check url active query params
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe active params
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // call for get first init component
      this.getJobs(params);
    });
  }

  // function for get all jobs from api
  getJobs(params: Params) {
    // show loading
    this.loadingService.displayLoader();
    this.jobsService.getJobs(params)
      .then((res: Job[]) => {
        this.jobs = res;
        // hidden loading
        this.loadingService.displayLoader();
      });
  }

  // search function
  onSearch(keyword: string) {
    // if keyword has word put query params on url
    if (keyword !== '') {
      this.router.navigate(['./'], {queryParams: {query: keyword}});
    } else {
      this.router.navigate(['./']);
    }
  }

}
