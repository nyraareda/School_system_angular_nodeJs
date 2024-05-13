import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DepartmentdbService } from '../../_services/departmentdb.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Departmentdb } from '../../_models/departmentdb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-department',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-department.component.html',
  styleUrl: './update-department.component.css'
})
export class UpdateDepartmentComponent implements OnInit{

  updatedept:Departmentdb=new Departmentdb(0,"","Mansoura");

  constructor(public deptDbservice:DepartmentdbService,public activateRoute:ActivatedRoute, public router:Router){}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.deptDbservice.getById(data['id']).subscribe(d=>{this.updatedept=d});
    })
  }

  save(){
    this.deptDbservice.update(this.updatedept).subscribe(data=>{
      this.router.navigateByUrl("/departments");
    })
  }
  // @Input() deptId!:number;
  // @Output() updateclicked: EventEmitter<number>=new EventEmitter<number>;

  // updateOne(){
  //   this.updateclicked.emit(this.deptId);
  // }
}
