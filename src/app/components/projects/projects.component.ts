import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects.service';
import { TokenService } from 'src/app/service/security/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(public projectsService: ProjectsService, private tokenService: TokenService) { }
  isAdmin = false;
  authorities:any;

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(data => {this.projects = data});
    this.authorities = this.tokenService.getAuthorities();
    if(this.authorities.includes('ROLE_ADMIN')){
      this.isAdmin = true;
    }
  }

  delete(idProject?: number ):void{
    if(idProject != undefined){
      this.projectsService.deleteProject(idProject).subscribe(data=>{
        this.projectsService.getProjects().subscribe(data => {this.projects = data});
      })
    }
  }

}
