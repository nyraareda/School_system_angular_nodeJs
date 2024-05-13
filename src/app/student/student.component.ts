import { Component } from '@angular/core';
import { Student } from '../_models/student';
import { Student2Component } from '../student2/student2.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [Student2Component],
  templateUrl: './student.component.html',
})
export class StudentComponent {
    id:number;
    name:string;
    s1:Student=new Student("Nyraa reda",10,25);
    constructor(){
        this.id=1;
        this.name="Esraa"
    }
  }
