import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../_models/student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../_services/student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit,OnDestroy{
  sub:Subscription|null=null;
  student:Student|null=null;
  constructor(public activatedRoute:ActivatedRoute,public studentService:StudentService){}
  
  ngOnInit(): void {
    this.sub=this.activatedRoute.params.subscribe({
      next:d=>{this.student=this.studentService.getById(d['id'])}
    })
    // let id = this.activatedRoute.snapshot.params['id'];  
    // console.log('ID from route params:', id);
    // this.student = this.studentService.getById(id);
    // console.log('Student details:', this.student);
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }



}
