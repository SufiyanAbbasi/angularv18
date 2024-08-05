import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hardcore-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hardcore-login.component.html',
  styleUrl: './hardcore-login.component.css'
})
export class HardcoreLoginComponent {

  constructor(private http: HttpClient, private router: Router) { }


  //hard core login
  // userObj: any = {
  //   username: '',
  //   password: '',
  // }

  // onLogin() {
  //   if (this.userObj.username == "admin" && this.userObj.password == "12345") {
  //     alert("User Login Successfully")
  //     localStorage.setItem('loginUser', this.userObj.username)
  //     this.router.navigateByUrl('binding');

  //   } else {
  //     alert("Invalid User")
  //   }
  // }




  //login with api where  port is  4209 and api is from  projectapi.gerasim.in

  userObj: any = {
    EmailId: '',
    Password: ''
  }

  onLogin() {
    // debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((res: any) => {
      if (res.result) {
        alert("User Login Successfully")
        localStorage.setItem('loginUser', this.userObj.EmailId)
        this.router.navigateByUrl('binding');
      }
      else {
        alert(res.message)
      }
    })
  }
}
