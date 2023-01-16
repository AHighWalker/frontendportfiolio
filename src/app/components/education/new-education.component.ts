import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  titleEdu: string = '';
  descriptionEdu: string = '';
  dateEdu: string = '';
  pictureEdu: string = '';
  
  constructor(private eduService: EducationService, private router:Router) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const edu = new education(this.titleEdu, this.descriptionEdu, this.dateEdu,this.pictureEdu);
    this.eduService.saveEducation(edu).subscribe(data =>{
      alert("Educacion añadida");
      this.router.navigate([''])
    },err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

}
