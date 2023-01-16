import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SoftSkillsComponent } from './components/skills/soft-skills/soft-skills.component';
import { HardSkillsComponent } from './components/skills/hard-skills/hard-skills.component'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewProjectsComponent } from './components/projects/new-projects.component';
import { EditProjectsComponent } from './components/projects/edit-projects.component';
import { NewHardskillsComponent } from './components/skills/hard-skills/new-hardskills.component';
import { EditHardskillsComponent } from './components/skills/hard-skills/edit-hardskills.component';
import { NewSoftskillsComponent } from './components/skills/soft-skills/new-softskills.component';
import { EditSoftskillsComponent } from './components/skills/soft-skills/edit-softskills.component';
import{NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ProfileComponent,
    EducationComponent,
    LoginComponent,
    HomeComponent,
    ExperienceComponent,
    SoftSkillsComponent,
    HardSkillsComponent,
    NewExperienceComponent,
  EditExperienceComponent,
  EditAboutComponent,
  EditProfileComponent,
  NewEducationComponent,
  EditEducationComponent,
  NewProjectsComponent,
  EditProjectsComponent,
  NewHardskillsComponent,
  EditHardskillsComponent,
  NewSoftskillsComponent,
  EditSoftskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
    
  
  ],
  providers: [  
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
