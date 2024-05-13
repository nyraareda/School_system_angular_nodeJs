import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student2',
  standalone: true,
  imports: [],
  templateUrl: './student2.component.html',
  styleUrl: './student2.component.css'
})
export class Student2Component {
  @Input()fname='Nyraa'
}
