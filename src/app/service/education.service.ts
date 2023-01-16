import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  URL = 'http://localhost:8080/education/'

  constructor(private http: HttpClient) { }

  public getEducation(): Observable<education>{
    return this.http.get<education>(this.URL + 'bring')
  }

  public detail(idEdu: number): Observable<education>{
    return this.http.get<education>(this.URL + `detail/${idEdu}`);
  }

  public saveEducation(education: education): Observable<any>{
    return this.http.post<any>(this.URL + 'new', education);
  }

  public updateEducation(idEdu: number, education: education): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${idEdu}`, education);
  }

  public deleteEducation(idEdu:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idEdu}`)
  }
}
