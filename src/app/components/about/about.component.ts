import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { about } from 'src/app/model/about.model';
import { AboutService } from 'src/app/service/about.service';
import { TokenService } from 'src/app/service/security/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: about = new about("");
  about2:about = new about(null);
  constructor(public aboutService:AboutService, private tokenService: TokenService, private activatedRouter:ActivatedRoute,private router:Router ) { }
  isAdmin = false;
  authorities: any;

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe( data => { this.about = data});
    this.authorities = this.tokenService.getAuthorities();
    if(this.authorities.includes('ROLE_ADMIN')){
      this.isAdmin = true;
    }
  }

  delete(idAbout?: number):void{
    
    this.aboutService.updateAbout(idAbout , this.about2).subscribe(data=>{
      this.aboutService.getAbout().subscribe( data => { this.about = data});
      }, err =>{
        alert("Error al modificar la descripcion deleteaboutts");

      }
    )
    
  }
}
