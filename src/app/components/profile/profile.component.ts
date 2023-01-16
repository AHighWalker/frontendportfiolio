import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { about } from 'src/app/model/about.model';
import { profile } from 'src/app/model/profile.model';
import { ProfileService } from 'src/app/service/profile.service';
import { TokenService } from 'src/app/service/security/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: profile = new profile("","","","","") 
  profile2: profile = new profile(null,null,null,null,null);

  constructor(public profileService: ProfileService,  private tokenService: TokenService, private activatedRouter:ActivatedRoute,private router:Router) { }
  isAdmin = false;
  authorities: any;

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data => {this.profile = data});
    this.authorities = this.tokenService.getAuthorities();
    if(this.authorities.includes('ROLE_ADMIN')){
      this.isAdmin = true;
    }
  }

  delete(idProfile?: number):void{
    
    this.profileService.updateProfile(idProfile , this.profile2).subscribe(data=>{
      this.profileService.getProfile().subscribe( data => { this.profile = data});
      }, err =>{
        alert("Error al modificar la descripcion deleteprofilets");

      }
    )
    
  }

}
