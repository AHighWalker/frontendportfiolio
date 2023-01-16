import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experience } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'http://localhost:8080/experience/'

  constructor(private http: HttpClient) { }

  public getExperience(): Observable<experience>{
    return this.http.get<experience>(this.URL + 'bring');
  }

  public detail(idExp: number): Observable<experience>{
    return this.http.get<experience>(this.URL + `detail/${idExp}`);
  }

  public saveExperience(experience: experience): Observable<any>{
    return this.http.post<any>(this.URL + 'new', experience);
  }

  public updateExperience(idExp: number, experience: experience): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${idExp}`, experience);
  }

  public deleteExperience(idExp:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idExp}`)
  }
}
