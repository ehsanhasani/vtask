import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
import { Job } from './job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  // array of job
  jobs: Job[];
  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    // call for get first init component
    this.getJobs();
  }

  // function for get all jobs from api
  getJobs() {
    this.jobsService.getJobs()
      .then((res: Job[]) => {
        this.jobs = res;
      });
  }

}
