import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  //template driven form
  student: any = {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    zipCode: '',
    isAccepted: false,
  }

  formValue:any ;

  onSubmit(){
    debugger;
    this.formValue= this.student;
    // console.log(this.formValue);
  }

}
