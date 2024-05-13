import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DepartmentdbService } from '../../_services/departmentdb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Departmentdb } from '../../_models/departmentdb';

@Component({
  selector: 'app-delete-department',
  standalone: true,
  imports: [],
  templateUrl: './delete-department.component.html',
  styleUrl: './delete-department.component.css'
})
export class DeleteDepartmentComponent implements OnInit,OnDestroy{

  constructor(public deptdbService:DepartmentdbService,public activateRoute:ActivatedRoute,public router:Router){}
  department:Departmentdb = new Departmentdb (0 , '' , '');
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.deptdbService.getById(params['id']).subscribe(dept=>{
        this.department = dept;
      });
    });
  }
  delete(id:number){
    this.deptdbService.delete(id).subscribe(dept=>{
      this.router.navigateByUrl('/departments')
    })
  }
  ngOnDestroy(): void {
      
  }
}

  // deleteDept(id: number) {
  //   this.deptdbService.delete(id).subscribe(data=> {
  //       console.log('Department deleted successfully');
  //       // Optionally, perform any additional actions after successful delete
  //     }
  //   );
  // }
  // @Input() deptId!:number;
  // @Output() deleteClicked:EventEmitter<number>= new EventEmitter<number>();

  // deleteDept(){
  //   this.deleteClicked.emit(this.deptId);
  // }
