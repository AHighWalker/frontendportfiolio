import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/model/security-model/jwt-dto';
import { LoginUser } from 'src/app/model/security-model/login-user';
import { NewUser } from 'src/app/model/security-model/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth';
  
  constructor(private httpClient: HttpClient) { }

  public newUser(newUser:NewUser):Observable<any>{
    return this.httpClient.post<any>(this.authURL + '/nuevo', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUser);
  }
}
