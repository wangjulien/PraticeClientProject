import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from '../model/child';
import { HttpClient } from '@angular/common/http';
import * as CONST from '../constants';
import { Activity } from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class AdminChildService {

  private child_url = CONST.REST_HOST + '/children';

  constructor(private http: HttpClient) { }

  getChildDetail(id): Observable<Child> {
    return this.http.get<Child>(this.child_url + '/' + id);
  }

  getActivitiesToInscribe(id): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.child_url + '/' + id + '/activities');
  }

  inscribeActivityToChild(childId, activityId) : Observable<any> {
    return this.http.post<any>(this.child_url + '/' + childId + '/activities/' + activityId, {});
  }
}
