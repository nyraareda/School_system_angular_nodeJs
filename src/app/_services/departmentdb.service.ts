import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_models/department';
import { Departmentdb } from '../_models/departmentdb';

@Injectable({
  providedIn: 'root'
})
export class DepartmentdbService {

  private baseUrl = "http://localhost:8000/departments/";
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Departmentdb[]>(this.baseUrl);
  }

  getById(id:number){
    return this.httpClient.get<Departmentdb>(this.baseUrl+id);
  }

  add(dept:Departmentdb){
    return this.httpClient.post<Departmentdb>(this.baseUrl,dept)
  }

  update(dept:Departmentdb){
    return this.httpClient.put<Departmentdb>(this.baseUrl+dept._id,dept);
  }
  delete(id: number) {
    return this.httpClient.delete(this.baseUrl+id);
  }

}
