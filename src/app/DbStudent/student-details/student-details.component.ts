import { Component, OnInit } from '@angular/core';
import { DbStudent } from '../../_models/db-student';
import { ActivatedRoute } from '@angular/router';
import { DbStudentService } from '../../_services/db-student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{

  std:DbStudent|null=null;

  constructor(public activatedRoute:ActivatedRoute,public DbstdService:DbStudentService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(par=>{this.DbstdService.getById(par['id']).subscribe(
      d=>{this.std=d}
    )})
  }


}
