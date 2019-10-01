import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  apiUrl = 'http://localhost:3000/api';
  constructor(private http: Http) {
  }

  // Get all users from the API
  getAllUsers() {
    return this.http.get(this.apiUrl + '/users').pipe(map((response: any) => response.json()));
  }

  getAUser(id: number) {
    return this.http.get(this.apiUrl + '/users/' + id).pipe(map((response: any) => response.json()));
  }
}
