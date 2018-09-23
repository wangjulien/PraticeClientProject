import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Family } from '../model/family';

@Injectable({
  providedIn: 'root'
})
export class AdminFamilyService {

  private family_url: string = 'localhost:8080/api/families';

  constructor(private http: HttpClient) { }

  getFamilies(): Observable<Family[]> {
    return this.http.get<Family[]>(this.family_url);
  }

  getFamily(id): Observable<Family> {
    return this.http.get<Family>(this.family_url + '/' + id);
  }

}
