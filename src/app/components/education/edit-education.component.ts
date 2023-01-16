import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  edu: education = null;
  constructor(private eduService:EducationService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idEdu = this.activatedRouter.snapshot.params['idEdu'];
    this.eduService.detail(idEdu).subscribe(data =>{
      this.edu = data;
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const idEdu = this.activatedRouter.snapshot.params['idEdu'];
    this.eduService.updateEducation(idEdu, this.edu).subscribe(data=>{
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar educacion 2");
        this.router.navigate(['']);
      }
    )
  }

}
