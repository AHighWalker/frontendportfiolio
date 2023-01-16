import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hardSkills } from 'src/app/model/hardskills.model';
import { HardskillsService } from 'src/app/service/hardskills.service';

@Component({
  selector: 'app-edit-hardskills',
  templateUrl: './edit-hardskills.component.html',
  styleUrls: ['./edit-hardskills.component.css']
})
export class EditHardskillsComponent implements OnInit {
  hardSkill: hardSkills = null;

  constructor(private hSService:HardskillsService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idHS = this.activatedRouter.snapshot.params['idHS'];
    this.hSService.detail(idHS).subscribe(data =>{
      this.hardSkill = data;
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const idHS = this.activatedRouter.snapshot.params['idHS'];
    this.hSService.updateHS(idHS, this.hardSkill).subscribe(data=>{
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar habilidad 2");
        this.router.navigate(['']);
      }
    )
  }

}
