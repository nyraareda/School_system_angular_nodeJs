import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-update-one-student',
  standalone: true,
  imports: [],
  templateUrl: './update-one-student.component.html',
  styleUrl: './update-one-student.component.css'
})
export class UpdateOneStudentComponent {
  @Input() studentId!: number;
  @Output() updateClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  updateStudent(){
    this.updateClicked.emit(this.studentId);
  }
}
