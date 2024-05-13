import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../_services/student.service';
import { Student } from '../../_models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';
import { UpdateOneStudentComponent } from '../update-one-student/update-one-student.component';
import { GetOneStudentComponent } from '../get-one-student/get-one-student.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all-student',
  standalone: true,
  imports: [FormsModule, CommonModule, DeleteStudentComponent, UpdateOneStudentComponent,GetOneStudentComponent,RouterLink,RouterOutlet],
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.css'
})
export class AllStudentComponent implements OnInit{
  allStd: Student[] = [];
  selectedStudentId: number | null = null;
  selectedStudent: Student | null = null;
  editedStudent: Student | null = null;

  constructor(public studentService: StudentService ,public router:Router) { }
  addNew(){
    this.router.navigateByUrl("/students/add");
  }
  ngOnInit() {
    this.allStd = this.studentService.getAll();
  }

  show() {
    this.allStd = this.studentService.getAll();
  }

  onGetOne(studentId: number) {
    this.selectedStudent = this.studentService.getById(studentId);
  }

  onDeleteStudent(studentId: number) {
    if (confirm('Are you sure you want to delete selected student?')) {
      this.studentService.deleteById(studentId);
      this.allStd = this.studentService.getAll();
      this.selectedStudent = null;
    }
  }

  onUpdateStudent(studentId: number) {
    console.log('Update button clicked for student ID:', studentId);
    const foundStudent = this.allStd.find(student => student.Id === studentId);
    if (foundStudent) {
      this.editedStudent = foundStudent;
    } else {
      console.error('Could not find student with ID:', studentId);
    }
  }

  saveStudentChanges(studentId: number){
    if (this.editedStudent) {
      this.studentService.updateById(studentId, this.editedStudent);
      this.editedStudent = null;
    }
  }

  cancelEdit(){
    this.editedStudent = null;
  }

}
