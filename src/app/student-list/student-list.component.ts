import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  newstudent:Student=new Student("",0,0);
  selectedStudent: Student | null = null;
  editedStudent: Student | null = null;
      students:Student[]=[
      new Student("nyraa",1,23),
      new Student("salma",2,24),
      new Student("esraa",3,24),
      new Student("handa",4,23),
    ]
    show(student:Student){
      this.selectedStudent=student
    }

    save(){
      this.students.push(new Student(this.newstudent.Name,this.newstudent.Id,this.newstudent.Age));
    }

    deleteById(id: number) {
      const studentToDelete = this.students.find(student => student.Id === id);
      if (studentToDelete) {
        this.students = this.students.filter(student => student !== studentToDelete);
        if (this.selectedStudent && this.selectedStudent.Id === id) {
          this.selectedStudent = null;
        }
      }
    }

    editStudent(student: Student){
      this.editedStudent = student; 
    }
    
    saveStudentChanges() {
      if (this.editedStudent) {
        const index = this.students.findIndex(s => s.Id === this.editedStudent!.Id);
        if (index !== -1) {
          this.students[index].Name = this.editedStudent!.Name; 
          this.students[index].Age = this.editedStudent!.Age; 
          this.editedStudent = null; 
        }
      }
    }
  
    cancelEdit() {
      this.editedStudent = null; // Exit editing mode
    }
}

