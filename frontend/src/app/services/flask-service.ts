import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FlaskService {
  constructor(private http: HttpClient) {}

  getProfilo() {
    return this.http.get('https://scaling-rotary-phone-q7vrjgjqrr7qc49r6-5000.app.github.dev/profilo');
  }
}