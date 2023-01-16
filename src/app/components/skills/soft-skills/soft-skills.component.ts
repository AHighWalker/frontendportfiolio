import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/security/token.service';
import { SoftskillsService } from 'src/app/service/softskills.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {
  softSkills: any;

  constructor(public softskillsService: SoftskillsService, private tokenService: TokenService) { }
  isAdmin = false;
  authorities:any;

  ngOnInit(): void {
    this.softskillsService.getSoftSkills().subscribe(data => {this.softSkills = data});
    this.authorities = this.tokenService.getAuthorities();
    if(this.authorities.includes('ROLE_ADMIN')){
      this.isAdmin = true;
    }
  }

  delete(idSS?: number ):void{
    if(idSS != undefined){
      this.softskillsService.deleteSS(idSS).subscribe(data=>{
        this.softskillsService.getSoftSkills().subscribe(data => {this.softSkills = data});
      })
    }
  }

}
