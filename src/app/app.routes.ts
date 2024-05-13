import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AllDepartmentComponent } from './department/all-department/all-department.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { Student2Component } from './student2/student2.component';
import { canLoginGuard } from './guards/can-login.guard';
import { LoginComponent } from './account/login/login.component';
import { AllStudentComponent } from './DbStudent/all-student/all-student.component';
// import { AllDepartmentComponent } from './department/all-department/all-department.component';
// import { AddDepartmentComponent } from './department/add-department/add-department.component';
// import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
// import { StudentDetailsComponent } from './student/student-details/student-details.component';
// import { AddStudentComponent } from './student/add-student/add-student.component';
// import { AllStudentComponent } from './student/all-student/all-student.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"students",loadChildren:()=>import("./student/student.routes").then(a=>a.stdroutes)},
    {path:"studentsdb",loadChildren:()=>import("./DbStudent/dbstudent.routes").then(a=>a.dbStdroutes)},
    {path:"departments",component:AllDepartmentComponent},
    {path:"departments",loadChildren:()=>import("./department/department.routes").then(d=>d.deptroutes)},
    {path:"student",component:Student2Component,canActivate:[canLoginGuard]},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"**",component:NotfoundComponent},
    // {path:"students",component:AllStudentComponent,children:[
    //     {path:"details/:id",component:StudentDetailsComponent},
    //     {path:"add",component:AddStudentComponent},
    // ]},
    // {path:"student/details/:id",component:StudentDetailsComponent},
    // {path:"student/add",component:AddStudentComponent},
    // {path:"departments/add",component:AddDepartmentComponent},
    // {path:"departments/details/:id",component:DepartmentDetailsComponent},
    
];
