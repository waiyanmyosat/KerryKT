import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://kerry-backend.vercel.app:3000/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://kerry-backend.vercel.app:3000/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://kerry-backend.vercel.app:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://kerry-backend.vercel.app:3000/employees/${id}`);
  }
}
