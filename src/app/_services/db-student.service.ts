import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DbStudent } from '../_models/db-student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbStudentService {
  baseUrl = "http://localhost:8000/students/";
  constructor(private httpClient:HttpClient) { }
  
  getAll(){
    return this.httpClient.get<DbStudent[]>(this.baseUrl);
  }

  getById(id:number){
    return this.httpClient.get<DbStudent>(this.baseUrl+id);
  }


  add(formData: FormData): Observable<DbStudent> {
    return this.httpClient.post<DbStudent>(this.baseUrl, formData);
  }
  update(formData: FormData): Observable<DbStudent> {
    // Append _id to the URL
    const url = this.baseUrl + formData.get('_id');
    
    // Set headers to specify content type as 'multipart/form-data'
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.httpClient.put<DbStudent>(url, formData, { headers: headers });
  }

  delete(id: number) {
    return this.httpClient.delete(this.baseUrl+id);
  }
}
