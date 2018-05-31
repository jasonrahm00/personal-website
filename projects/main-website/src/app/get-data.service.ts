import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }
  
  getResume() {
    return this.http.get<any>('data/resume-data.json');
  }

}
