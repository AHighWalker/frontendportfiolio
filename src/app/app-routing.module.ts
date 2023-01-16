import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditHardskillsComponent } from './components/skills/hard-skills/edit-hardskills.component';
import { NewHardskillsComponent } from './components/skills/hard-skills/new-hardskills.component';
import { EditSoftskillsComponent } from './components/skills/soft-skills/edit-softskills.component';
import { NewSoftskillsComponent } from './components/skills/soft-skills/new-softskills.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: '', component:HomeComponent},
  {path: 'newexperience',component: NewExperienceComponent},
  {path: 'editexperience/:idExp',component:EditExperienceComponent},
  {path: 'editabout/:idAbout', component: EditAboutComponent},
  {path: 'editprofile/:idProfile', component:EditProfileComponent},
  {path: 'neweducation',component:NewEducationComponent},
  {path: 'editeducation/:idEdu', component:EditEducationComponent},
  {path: 'newproject', component:NewProjectsComponent},
  {path: 'editproject/:idProject', component:EditProjectsComponent},
  {path: 'newhardskill', component:NewHardskillsComponent},
  {path: 'edithardskill/:idHS', component:EditHardskillsComponent},
  {path: 'newsoftskill', component:NewSoftskillsComponent},
  {path: 'editsoftskill/:idSS', component:EditSoftskillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
