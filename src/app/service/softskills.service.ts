import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { softSkills } from '../model/softskills.model';

@Injectable({
  providedIn: 'root'
})
export class SoftskillsService {
  URL = 'http://localhost:8080/softskills/'

  constructor(private http:HttpClient) { }

  public getSoftSkills():Observable<softSkills>{
    return this.http.get<softSkills>(this.URL + 'bring')
  }

  public detail(idSS: number): Observable<softSkills>{
    return this.http.get<softSkills>(this.URL + `detail/${idSS}`);
  }

  public saveSoftskills(softskills: softSkills): Observable<any>{
    return this.http.post<any>(this.URL + 'new', softskills);
  }

  public updateSoftskills(idSS: number,softskills: softSkills): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${idSS}`, softskills);
  }

  public deleteSS(idSS:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idSS}`)
  }
}
