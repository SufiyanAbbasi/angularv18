import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from "../../../reusablecomponents/alert/alert.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userData: any[] = [];

  constructor(private http: HttpClient) { }

  getAllUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      // debugger;
      this.userData = result;
    })
  }
}
