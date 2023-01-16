import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projects } from 'src/app/model/projects.model';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit {
  titleProject: string = '';
  descriptionProject: string = '';
  pictureProject: string = '';
  linkProject: string = '';

  constructor(private proService: ProjectsService, private router:Router) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const pro = new projects(this.titleProject, this.descriptionProject, this.pictureProject,this.linkProject);
    this.proService.saveProject(pro).subscribe(data =>{
      alert("Projecto añadido");
      this.router.navigate([''])
    },err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

}
