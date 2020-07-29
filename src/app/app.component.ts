import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams$ = this.http.get('http://localhost:3000/api/teams');

  constructor(private http: HttpClient) {}
}
