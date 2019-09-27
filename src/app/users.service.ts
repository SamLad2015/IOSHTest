import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private http: Http) {
  }

  // Get all users from the API
  getAllUsers() {
    return this.http.get('http://localhost:3000/getusers').pipe(map((response: any) => response.json()));
  }

  getAUser(id: number) {
    return this.http.get('http://localhost:3000/getusers?id=' + id).pipe(map((response: any) => response.json()));
  }
}
