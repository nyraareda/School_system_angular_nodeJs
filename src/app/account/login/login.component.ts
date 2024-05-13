import { Component } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { DbStudent } from '../../_models/db-student';
import { Auth } from '../../_models/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogged=false;
  student: DbStudent = new DbStudent(0, "", 0, "");
  constructor(public account: AccountService,public router:Router) {}

  login(): void {
    this.account.getToken(this.student).subscribe(
      (response: Auth) => {
        console.log('Token:', response.token);
        this.isLogged=true;
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/studentsdb');
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
