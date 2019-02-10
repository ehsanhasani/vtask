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
  // keyword string search input
  keyword: string;
  constructor(private jobsService: JobsService,
              // for show loading when get jobs
              private loadingService: LoadingService,
              // for navigate
              private router: Router,
              // for check url active query params
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.jobs = [];
    // subscribe active params
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // call for get first init component
      this.getJobs(params);
      // check query params in url or not
      if ('query' in params) {
        this.keyword = params.query;
      }
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
  onSearch() {
    // if keyword has word put query params on url
    if (this.keyword !== '') {
      this.router.navigate(['./'], {queryParams: {query: this.keyword}});
    } else {
      this.router.navigate(['./']);
    }
  }

}
