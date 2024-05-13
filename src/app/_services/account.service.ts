import { Injectable } from '@angular/core';
import { DbStudent } from '../_models/db-student';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../_models/auth';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLogged = false;
  private baseUrl = 'http://localhost:8000/login';

  constructor(private http: HttpClient) { }


  getToken(student: DbStudent){
    return this.http.post<Auth>(this.baseUrl, student);
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  }
  logout(): void {
    localStorage.removeItem('token');
  }
  

  login() {
    this.isLogged = true;
  }

}