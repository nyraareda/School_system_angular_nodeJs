import { Component } from '@angular/core';
import { DbStudent } from '../../_models/db-student';
import { DbStudentService } from '../../_services/db-student.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Departmentdb } from '../../_models/departmentdb';
import { DepartmentdbService } from '../../_services/departmentdb.service';

@Component({
  selector: 'app-add-student',
  imports:[CommonModule,FormsModule],
  standalone:true,
  templateUrl: './add-student.component.html', 
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent {
  newstd: DbStudent = new DbStudent(0, "", 0, "");
  selectedFile: File | null = null;
  departments: Departmentdb[] = [];

  constructor(public DbstdService: DbStudentService, public router: Router,public deptService:DepartmentdbService) {}

  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.fetchDepartments();
  }

  fetchDepartments(): void {
    this.deptService.getAll().subscribe(
      (departments: Departmentdb[]) => {
        this.departments = departments;
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }
  save() {
    const formData = new FormData();
    formData.append('_id', this.newstd._id.toString());
    formData.append('name', this.newstd.name);
    formData.append('department', this.newstd.department.toString());
    if (this.selectedFile) { 
      formData.append('image', this.selectedFile);
    }

    this.DbstdService.add(formData).subscribe(
      stdadd => {
        // console.log(stdadd);
        this.router.navigateByUrl("/studentsdb");
      }
    );
  }
}

