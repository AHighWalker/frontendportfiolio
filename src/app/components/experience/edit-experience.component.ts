import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  exp: experience = null;
  
  constructor(private expService:ExperienceService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idExp = this.activatedRouter.snapshot.params['idExp'];
    this.expService.detail(idExp).subscribe(data =>{
      this.exp = data;
      }, err =>{
        alert("Error al modificar experiencia1");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const idExp = this.activatedRouter.snapshot.params['idExp'];
    this.expService.updateExperience(idExp, this.exp).subscribe(data=>{
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar experiencia2");
        this.router.navigate(['']);
      }
    )
  }

}
