import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  //Get all data from database service
  getAll() {
    //This is from backend (nodejs port 8080)
    const baseUrl = 'http://localhost:8080/mission'
    return this.http.get(baseUrl);
  }
}
