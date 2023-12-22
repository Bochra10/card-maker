// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://20.105.16.136:8080'; // Set your base API URL here

  constructor(private http: HttpClient) {}



  getUsers(): Observable<any[]> {
    const endpoint = '/users';
    return this.http.get<any[]>(`${this.apiUrl}${endpoint}`).pipe(
      catchError((error)=> {
        console.log(error);
        return [];
      })
    );
  }

  addUser(user:any): Observable<any> {
    const endpoint = '/users';
    console.log(user);
    return this.http.post<any>(`${this.apiUrl}${endpoint}`, user).pipe(
      catchError((error)=> {
        console.log(error);
        return [];
      })
    );
  }

  updateUser(user: any): Observable<any> {
    const endpoint = '/users';
    return this.http.put<any[]>(`${this.apiUrl}${endpoint}`, user).pipe(
      catchError((error)=> {
        console.log(error);
        return null;
      })
    );
  }

  deleteUser(email: String): Observable<any> {
    const endpoint = '/users/'+email;
    return this.http.delete<any[]>(`${this.apiUrl}${endpoint}`).pipe(
      catchError((error)=> {
        console.log(error);
        return null;
      })
    );
  }

}
