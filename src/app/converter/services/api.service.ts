import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  saveHex(hex: string) {
    return this.http.post('http://localhost:4200/save-hex', {hex: hex});
  }
}
