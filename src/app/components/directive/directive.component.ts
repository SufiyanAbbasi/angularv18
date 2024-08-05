import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  num1:string= "";
  num2:string= "";
  isChecked: boolean = true;
  city: string[] = ['Abbottabad', 'Pindi', 'Islamabad', 'Lhr']
  div1BgColor: string = "bg-primary";

  constructor(){}

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggle(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
  checkBox(){
    this.isChecked=!this.isChecked;
  }

  addRedClass(){
    this.div1BgColor = "bg-danger";
  }

  addBlueClass(){
    this.div1BgColor = "bg-primary";

  }
}
