import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { about } from 'src/app/model/about.model';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  about: about = null;
  constructor(private aboutService: AboutService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idAbout = this.activatedRouter.snapshot.params['idAbout'];
    this.aboutService.detail(idAbout).subscribe(data =>{
      this.about = data;
      }, err =>{
        alert("Error al modificar la descripcion 1 ");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const idAbout = this.activatedRouter.snapshot.params['idAbout'];
    this.aboutService.updateAbout(idAbout, this.about).subscribe(data=>{
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la descripcion 2");
        this.router.navigate(['']);
      }
    )
  }

}
