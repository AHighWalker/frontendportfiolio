import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { profile } from 'src/app/model/profile.model';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profile: profile = null;
  constructor(private profileService: ProfileService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const idProfile = this.activatedRouter.snapshot.params['idProfile'];
    this.profileService.detail(idProfile).subscribe(data =>{
      this.profile = data;
      }, err =>{
        alert("Error al modificar el perfil ");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const idProfile = this.activatedRouter.snapshot.params['idProfile'];
    this.profileService.updateProfile(idProfile, this.profile).subscribe(data=>{
      this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar el perfil 2");
        this.router.navigate(['']);
      }
    )
  }

}
