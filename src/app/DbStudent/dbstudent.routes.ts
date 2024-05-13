import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AllStudentComponent } from './all-student/all-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddStudentComponent } from './add-student/add-student.component';


export const dbStdroutes: Routes = [
    {path:"",component:AllStudentComponent},
    {path:"details/:id",component:StudentDetailsComponent},
    {path:"update/:id",component:UpdateStudentComponent},
    {path:"delete/:id",component:DeleteStudentComponent},
    {path:"add",component:AddStudentComponent},
]