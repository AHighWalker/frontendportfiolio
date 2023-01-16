import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projects } from '../model/projects.model';
import { softSkills } from '../model/softskills.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  URL = 'http://localhost:8080/projects/'
  constructor(private http: HttpClient) { }

  public getProjects(): Observable<projects>{
    return this.http.get<projects>(this.URL + 'bring')
  }

  public detail(idProject: number): Observable<projects>{
    return this.http.get<projects>(this.URL + `detail/${idProject}`);
  }

  public saveProject(projects: projects): Observable<any>{
    return this.http.post<any>(this.URL + 'new', projects);
  }

  public updateProject(idProject: number, projects: projects): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${idProject}`, projects);
  }

  public deleteProject(idProject:number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${idProject}`)
  }
}
