import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CruService {

  private API_URL = 'http://localhost:8090/api';
  private htpHeaders = new  HttpHeaders({'Content-type':'application/json'});


  constructor(private http: HttpClient, private router: Router)  { }


  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/consultar`);
  }

  updateUser(user:User):Observable<any> {

    return this.http.put<any>(`${this.API_URL}/editar/${user.id}`,user,{headers:this.htpHeaders});

  }

  saveUser(user:User):Observable<any>{
    return this.http.post<User>(`${this.API_URL}/crear`,user,{headers:this.htpHeaders});
  }


  getOneUser(id: Number):Observable<User>{
    return this.http.get<User>(`${this.API_URL}/listar-uno/${id}`);
  }

  deletUser(id: number):Observable<any>{
    return this.http.delete(`${this.API_URL}/eliminar/${id}`)
  }
}
