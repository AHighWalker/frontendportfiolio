import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { about } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  URL = 'http://localhost:8080/about/'

  constructor(private http: HttpClient) { }

  public getAbout(): Observable<about>{
    return this.http.get<about>(this.URL + 'find/1');
  }

  public detail(idAbout: number): Observable<about>{
    return this.http.get<about>(this.URL + `detail/${idAbout}`);
  }

  public saveAbout(about: about): Observable<any>{
    return this.http.post<any>(this.URL + 'new', about);
  }

  public updateAbout(idAbout: number, about: about): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${idAbout}`, about);
  }

  public deleteAbout(idAbout:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idAbout}`)
  }
}
