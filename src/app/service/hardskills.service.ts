import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hardSkills } from '../model/hardskills.model';

@Injectable({
  providedIn: 'root'
})
export class HardskillsService {
  URL = 'http://localhost:8080/hardskills/'

  constructor(private http:HttpClient) { }

  public getHardSkills():Observable<hardSkills>{
    return this.http.get<hardSkills>(this.URL + 'bring' )
  }

  public detail(idHS: number): Observable<hardSkills>{
    return this.http.get<hardSkills>(this.URL + `detail/${idHS}`);
  }

  public saveHS(hardskills: hardSkills): Observable<any>{
    return this.http.post<any>(this.URL + 'new', hardskills);
  }

  public updateHS(idHS: number, hardskills: hardSkills): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${idHS}`, hardskills);
  }

  public deleteHS(idHS:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idHS}`)
  }
}
