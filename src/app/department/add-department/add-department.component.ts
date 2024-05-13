import { Component } from '@angular/core';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/department.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Departmentdb } from '../../_models/departmentdb';
import { DepartmentdbService } from '../../_services/departmentdb.service';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  newdept:Departmentdb=new Departmentdb(0,"","");

  constructor(public deptDbService:DepartmentdbService,public router:Router){

  }


  save(){
    this.deptDbService.add(this.newdept).subscribe(deptadd=>{
      this.router.navigateByUrl("departments")
    })
    
  }

}
