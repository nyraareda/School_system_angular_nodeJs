import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AllStudentComponent } from './all-student/all-student.component';

export const stdroutes: Routes = [
    {path:"",component:AllStudentComponent},
    {path:"details/:id",component:StudentDetailsComponent},
    {path:"add",component:AddStudentComponent},
]