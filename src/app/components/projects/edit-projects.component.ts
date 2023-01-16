import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from 'src/app/model/projects.model';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent implements OnInit {
  pro: projects = null;

  constructor(private proService:ProjectsService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idProject = this.activatedRouter.snapshot.params['idProject'];
    this.proService.detail(idProject).subscribe(data =>{
      this.pro = data;
      }, err =>{
        alert("Error al modificar el projecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const idProject = this.activatedRouter.snapshot.params['idProject'];
    this.proService.updateProject(idProject, this.pro).subscribe(data=>{
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar el projecto 2");
        this.router.navigate(['']);
      }
    )
  }

}
