import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { softSkills } from 'src/app/model/softskills.model';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-new-softskills',
  templateUrl: './new-softskills.component.html',
  styleUrls: ['./new-softskills.component.css']
})
export class NewSoftskillsComponent implements OnInit {
  titleSS: string = '';
  percentageSS: number = null;
  pictureSS: string = '';

  constructor(private softSService: SoftskillsService, private router:Router) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const sS = new softSkills(this.titleSS, this.percentageSS, this.pictureSS);
    this.softSService.saveSoftskills(sS).subscribe(data =>{
      alert("Habilidad añadida");
      this.router.navigate([''])
    },err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

}
