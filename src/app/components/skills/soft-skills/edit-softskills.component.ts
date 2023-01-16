import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { softSkills } from 'src/app/model/softskills.model';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-edit-softskills',
  templateUrl: './edit-softskills.component.html',
  styleUrls: ['./edit-softskills.component.css']
})
export class EditSoftskillsComponent implements OnInit {
  softSkill: softSkills = null;

  constructor(private softSService:SoftskillsService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idSS = this.activatedRouter.snapshot.params['idSS'];
    this.softSService.detail(idSS).subscribe(data =>{
      this.softSkill = data;
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const idSS = this.activatedRouter.snapshot.params['idSS'];
    this.softSService.updateSoftskills(idSS, this.softSkill).subscribe(data=>{
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar habilidad 2");
        this.router.navigate(['']);
      }
    )
  }

}
