import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Family } from '../model/family';
import { FamilyDetail } from '../model/family-detail';
import * as CONST from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AdminFamilyService {

  private family_url = CONST.REST_HOST + '/families';

  constructor(private http: HttpClient) { }

  getFamilies(): Observable<Family[]> {
    return this.http.get<Family[]>(this.family_url);
  }

  getFamilyDetail(id): Observable<FamilyDetail> {
    return this.http.get<FamilyDetail>(this.family_url + '/' + id);
  }

  addFamily(family): Observable<FamilyDetail> {
    return this.http.post<FamilyDetail>(this.family_url, family);
  }

  updateFamily(family): Observable<FamilyDetail> {
    return this.http.put<FamilyDetail>(this.family_url, family);
  }

  deleteFamily(id): Observable<any> {
    return this.http.delete(this.family_url + '/' + id);
  }

  addChildToFamily(id, newChild): Observable<FamilyDetail> {
    return this.http.post<FamilyDetail>(this.family_url + '/' + id + '/children', newChild);
  }
}
