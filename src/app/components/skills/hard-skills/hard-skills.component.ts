import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HardskillsService } from 'src/app/service/hardskills.service';
import { TokenService } from 'src/app/service/security/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hardSkills: any;

  constructor(public hardskillsService: HardskillsService, private tokenService: TokenService) { }
  isAdmin = false;
  authorities:any;

  ngOnInit(): void {
    this.hardskillsService.getHardSkills().subscribe(data => {this.hardSkills = data});
    this.authorities = this.tokenService.getAuthorities();
    if(this.authorities.includes('ROLE_ADMIN')){
      this.isAdmin = true;
    }
  }

  delete(idHS?: number ):void{
    if(idHS != undefined){
      this.hardskillsService.deleteHS(idHS).subscribe(data=>{
        this.hardskillsService.getHardSkills().subscribe(data => {this.hardSkills = data});
      })
    }
  }

}
