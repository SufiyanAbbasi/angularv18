import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  coursename: string = "Computer Science"
  changeCourse: string = "SE"

  marks: number = 200;

  myClass: string = "text-danger"

  constructor() { }

  showAlert(message: string) {
    alert(message)
  }

  changeCourseName(){
    this.coursename="Chemistry"
    //changing signal value using set method
    this.firstName.set('Khan');
  }

  //signals
  firstName = signal("Abbasi");

}
