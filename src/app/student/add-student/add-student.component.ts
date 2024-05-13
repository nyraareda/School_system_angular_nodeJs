import { Component, Output } from '@angular/core';
import { StudentService } from '../../_services/student.service';
import { Student } from '../../_models/student';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  newstd:Student=new Student('',0,0);

  constructor(public studentService:StudentService,public router:Router){}

  save(){
    this.studentService.addNew(this.newstd);
    this.router.navigateByUrl("/students");
  }

}
