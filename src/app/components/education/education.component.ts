import { Component, OnInit } from '@angular/core';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/security/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: any;

  constructor(public educationService: EducationService, private tokenService: TokenService) { }
  isAdmin = false;
  authorities:any;

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => {this.education = data});
    this.authorities = this.tokenService.getAuthorities();
    if(this.authorities.includes('ROLE_ADMIN')){
      this.isAdmin = true;
    }
  }

  delete(idEdu?: number ):void{
    if(idEdu != undefined){
      this.educationService.deleteEducation(idEdu).subscribe(data=>{
        this.educationService.getEducation().subscribe(data => {this.education = data});
      })
    }
  }
  
}
