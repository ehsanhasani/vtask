import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Params } from '@angular/router';
import { URLSearchParams } from 'url';

import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  url: any = 'https://jobs.search.gov/jobs/search.json';

  constructor(private http: HttpClient) { }

  getJobs(params: Params) {
    return this.http.get(this.url, { params: params })
      .toPromise()
      .then((res) => res);
  }
}
