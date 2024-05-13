import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AllStudentComponent } from './student/all-student/all-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { GetOneStudentComponent } from './student/get-one-student/get-one-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { AllDepartmentComponent } from './department/all-department/all-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,StudentComponent,StudentListComponent,AllStudentComponent,AddStudentComponent,GetOneStudentComponent,DeleteStudentComponent,AllDepartmentComponent,AddDepartmentComponent,NotfoundComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';

  constructor(public account: AccountService) {}

  logout() {
    this.account.logout();
  }
}
