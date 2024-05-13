import { Component, OnDestroy, OnInit } from '@angular/core';
import { DbStudent } from '../../_models/db-student';
import { Subscription } from 'rxjs';
import { DbStudentService } from '../../_services/db-student.service';
import { RouterLink } from '@angular/router';
import { environment } from '../../url';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Departmentdb } from '../../_models/departmentdb';
import { DepartmentdbService } from '../../_services/departmentdb.service';

@Component({
  selector: 'app-all-student',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.css'
})
export class AllStudentComponent implements OnInit,OnDestroy{

  allstd:DbStudent[]=[];
  dept:Departmentdb|null=null;
  sub:Subscription | null=null;

  // ngOnInit(): void {
  //   this.sub=this.dbStdService.getAll().subscribe({
  //     next:data=>{this.allstd=data}
  // });
  // }

  constructor(public dbStdService:DbStudentService,private sanitizer: DomSanitizer,public deptService:DepartmentdbService){}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();  }
  
    getImageUrl(filename: string): SafeResourceUrl {
      const imageUrl = `${environment.apiUrl}/images/${filename}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
    }

    ngOnInit(): void {
      this.fetchStudents();
    }
  
    fetchStudents(): void {
      this.dbStdService.getAll().subscribe(
        (students: DbStudent[]) => {
          this.allstd = students;
          this.fetchDepartmentNames();
        },
        (error) => {
          console.error('Error fetching students:', error);
        }
      );
    }
  
    fetchDepartmentNames(): void {
      for (const student of this.allstd) {
        this.deptService.getById(student.department).subscribe(
          (dept: any) => {
            student.department = dept.name;
          },
          (error) => {
            console.error(`Error fetching department for student ${student._id}:`, error);
          }
        );
      }
    }
  
}
