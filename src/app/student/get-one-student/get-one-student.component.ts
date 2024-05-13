import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentService } from '../../_services/student.service';
import { Student } from '../../_models/student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-one-student',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './get-one-student.component.html',
  styleUrl: './get-one-student.component.css'
})
export class GetOneStudentComponent {
  @Input() selectedStudent!:Student;
  @Output() getClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  getOneby() {
    this.getClicked.emit(this.selectedStudent.Id);
  }
}
