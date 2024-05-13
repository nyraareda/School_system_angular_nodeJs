import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/department.service';
import { CommonModule } from '@angular/common';
import { DeleteDepartmentComponent } from '../delete-department/delete-department.component';
import { UpdateDepartmentComponent } from '../update-department/update-department.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DepartmentdbService } from '../../_services/departmentdb.service';
import { Departmentdb } from '../../_models/departmentdb';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-department',
  standalone: true,
  imports: [CommonModule,DeleteDepartmentComponent,UpdateDepartmentComponent,FormsModule,RouterLink],
  templateUrl: './all-department.component.html',
  styleUrl: './all-department.component.css'
})
export class AllDepartmentComponent implements OnInit,OnDestroy{
  allDept: Departmentdb[] = [];
  sub:Subscription | null=null;
  // selectedDepartmentId: number | null = null;
  // selectedDepartment: Department | null = null;
  // editedDepartment: Department | null = null;

  
  ngOnInit(): void {
    this.sub=this.deptDbService.getAll().subscribe({
    next:data=>{this.allDept=data}
});
  }

  constructor(public deptDbService: DepartmentdbService) { }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  // ngOnInit(): void {
  //   this.allDept = this.deptService.getAll();
  // }

  // addNew(){
  //   this.router.navigateByUrl("departments/add")
  // }

  // show() {
  //   this.allDept = this.deptService.getAll();
  // }

  // getOneby(id: number) {
  //   this.selectedDepartment = this.deptService.getById(id);
  // }

  // onGetbyId(deptId:number){
  //   this.selectedDepartment=this.deptService.getById(deptId)
  // }

  // onDeleteDept(deptId:number){
  //   if(confirm('Are u sure to delete this department')){
  //     this.deptService.deleteById(deptId);
  //     this.allDept=this.deptService.getAll();
  //     this.selectedDepartment=null;
  //   }
  // }
  // onUpdateDept(deptId:number){
  //   const foundDept=this.allDept.find(dept=>dept.Iddept===deptId);
  //   if(foundDept){
  //     this.editedDepartment=foundDept;
  //   }
  // }

  // saveDeptChanges(deptId:number){
  //   if(this.editedDepartment){
  //     this.deptService.updateById(deptId,this.editedDepartment);
  //     this.editedDepartment=null;
  //   }
  // }
  
  // cancelEdit(){
  //   this.editedDepartment=null;
  // }

  // trackById(index: number, item: any){
  //   return item.Id;
  // }
}
