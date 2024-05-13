import { Routes } from '@angular/router';
import { AllDepartmentComponent } from './all-department/all-department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


export const deptroutes: Routes = [
    {path:"",component:AllDepartmentComponent},
    {path:"details/:id",component:DepartmentDetailsComponent},
    {path:"update/:id",component:UpdateDepartmentComponent},
    {path:"delete/:id",component:DeleteDepartmentComponent},
    {path:"add",component:AddDepartmentComponent},
]