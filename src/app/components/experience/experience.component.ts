import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/security/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any;

  constructor(public experienceService: ExperienceService, private tokenService: TokenService) { }
  isAdmin = false;
  authorities:any;
  
  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(data => {this.experience = data});
    this.authorities = this.tokenService.getAuthorities();
    if(this.authorities.includes('ROLE_ADMIN')){
      this.isAdmin = true;
    }
  }

  delete(idExp?: number ):void{
    if(idExp != undefined){
      this.experienceService.deleteExperience(idExp).subscribe(data=>{
        this.experienceService.getExperience().subscribe(data => {this.experience = data});
      })
    }
  }



}
