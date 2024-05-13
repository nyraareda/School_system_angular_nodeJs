import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentService } from '../../_services/student.service';

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [],
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
  @Input() studentId!: number;
  @Output() deleteClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  deleteStudent(){
    this.deleteClicked.emit(this.studentId);
  }
}

