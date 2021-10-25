import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class MsService {

  private api = '/v1/ms/Usuario';

  constructor(
    private http: HttpClient
  ) { }

  getUser(id: string) {
    const path = `${this.api}/${id}/null/null`;


    return this.http.get<Usuario[]>(path);
  }

}