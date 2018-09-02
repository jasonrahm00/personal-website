import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const urls = {
  "resume": "data/resume.json",
  "projects": "data/projects.json"
};

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData(key) {
    return this.http.get<any>(urls[key]);
  }

}
