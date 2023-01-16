import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL = 'http://localhost:8080/profile/'

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<profile>{
    return this.http.get<profile>(this.URL + 'find/1')
  }

  public detail(idProfile: number): Observable<profile>{
    return this.http.get<profile>(this.URL + `detail/${idProfile}`);
  }

  public saveProfile(profile: profile): Observable<any>{
    return this.http.post<any>(this.URL + 'new', profile);
  }

  public updateProfile(idProfile: number, profile: profile): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${idProfile}`, profile);
  }

  public deleteProfile(idProfile:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idProfile}`)
  }
}
