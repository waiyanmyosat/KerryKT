import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://real-blue-pangolin-slip.cyclic.app:8000/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://real-blue-pangolin-slip.cyclic.app:8000/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://real-blue-pangolin-slip.cyclic.app:8000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://real-blue-pangolin-slip.cyclic.app:8000/employees/${id}`);
  }
}
