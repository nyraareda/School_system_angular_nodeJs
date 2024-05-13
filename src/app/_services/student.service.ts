import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student | null = null;
  private students:Student[]=[
    new Student("nyraa",1,23),
    new Student("salma",2,24),
    new Student("esraa",3,24),
    new Student("handa",4,23),
  ];
  getAll(){
    return this.students;
  };

  addNew(newstudent:Student){
    this.students.push(new Student(newstudent.Name,newstudent.Id,newstudent.Age));

  }
  getById(id: number): Student | null {
    let std = this.students.find(student => student.Id == id);
    return std!;
  }
  

  deleteById(id: number){
    return this.students = this.students.filter(student => student.Id !== id);
  }

  updateById(id: number, updatedStudent: Student): void {
    const index = this.students.findIndex(student => student.Id === id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }
  constructor() { }
}

