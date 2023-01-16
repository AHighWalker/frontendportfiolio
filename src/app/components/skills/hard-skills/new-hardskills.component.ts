import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hardSkills } from 'src/app/model/hardskills.model';
import { HardskillsService } from 'src/app/service/hardskills.service';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Component({
  selector: 'app-new-hardskills',
  templateUrl: './new-hardskills.component.html',
  styleUrls: ['./new-hardskills.component.css']
})
export class NewHardskillsComponent implements OnInit {
  titleHS: string = '';
  percentageHS: number = null;
  pictureHS: string = '';

  constructor(private hSService: HardskillsService, private router:Router) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const hS = new hardSkills(this.titleHS, this.percentageHS, this.pictureHS);
    this.hSService.saveHS(hS).subscribe(data =>{
      alert("Habilidad añadida");
      this.router.navigate([''])
    },err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }

}
