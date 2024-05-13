import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  selectedDepartment: Department | null = null;
  private departments:Department[]=[
    new Department("IT", 1),
    new Department("HR", 2),
    new Department("Finance", 3),
    new Department("Marketing", 4)
  ];
  getAll(){
    return this.departments;
  };

  addNew(newdept:Department){
    this.departments.push(new Department(newdept.Namedept,newdept.Iddept));

  }
  
  getById(id: number){
    return this.departments.find(department => department.Iddept == id) || null;
  }

  deleteById(id: number){
    return this.departments = this.departments.filter(department => department.Iddept !== id);
  }

  updateById(id: number, updatedDepartment: Department): void {
    const index = this.departments.findIndex(department => department.Iddept === id);
    if (index !== -1) {
      this.departments[index] = updatedDepartment;
    }
  }
  constructor() { }

}
