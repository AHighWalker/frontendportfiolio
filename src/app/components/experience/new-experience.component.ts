import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  titleExp: string = '';
  descriptionExp: string = '';
  sinceExp: string = '';
  untilExp: string = '';
  pictureExp: string = '';
  locationExp: string = '';

  constructor(private expService: ExperienceService, private router:Router) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const exp = new experience(this.titleExp, this.descriptionExp, this.sinceExp,this.untilExp,this.pictureExp,this.locationExp);
    this.expService.saveExperience(exp).subscribe(data =>{
      alert("Experiencia añadida");
      this.router.navigate([''])
    },err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
