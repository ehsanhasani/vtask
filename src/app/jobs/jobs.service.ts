import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  url: any = 'https://jobs.search.gov/jobs/search.json';

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get(this.url)
      .toPromise()
      .then((res) => res)
      .catch((error) => console.log(error));
  }
}
