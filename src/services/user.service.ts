import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { User } from '../models/User';

@Injectable()
export class UsersService {
  private userUrl = 'http://localhost:8090/users';

  currentUser: User;

  private _isAuthenticated: boolean;
  public get isAuthenticated(): boolean {
    if (this.currentUser) {
      return true;
    }

    this._isAuthenticated = !!this.getFromStorage();

    return this._isAuthenticated;
  }

  public set isAuthenticated(v: boolean) {
    this._isAuthenticated = v;
  }

  private _isAdmin: boolean;
  public get isAdmin(): boolean {
    return this.isAuthenticated ?
      this.currentUser.isAdmin :
      false;
  }
  public set isAdmin(v: boolean) {
    this._isAdmin = v;
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

  addUser(user: User) {
    return this.http.post<User>(this.userUrl + '/create', user);
  }

  updateUser(user: User) {
    return this.http.put<User>(this.userUrl + '/update', user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.userUrl + '/delete/' + id);
  }

  // --- Login ---
  login(userName: string, password: string): Observable<User> {
    return this.getUsers()
    .map(u => u.find(fu => fu.username === userName && fu.password === password))
    .do(u => {if (u) {
                      this.saveToStorage(u);
                      }
      });
  }

  logoff() {
    this.removeFromStorage();
  }  

  private saveToStorage(user: User) {
    localStorage.setItem('mystore.cred', JSON.stringify(user));
    this.currentUser = user;
  }

  private removeFromStorage() {
    localStorage.removeItem('mystore.cred');
    this.currentUser = null;
  }

  private getFromStorage(): User {
    this.currentUser = JSON.parse(localStorage.getItem('mystore.cred'));
    return this.currentUser;
  }

}