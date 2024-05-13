import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentdbService } from '../../_services/departmentdb.service';
import { CommonModule } from '@angular/common';
import { Departmentdb } from '../../_models/departmentdb';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  dept:Departmentdb|null=null;
  constructor(public activatedRoute:ActivatedRoute,public deptDbService:DepartmentdbService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(par=>{this.deptDbService.getById(par['id']).subscribe(
      d=>{this.dept=d}
    )})
  }
}


