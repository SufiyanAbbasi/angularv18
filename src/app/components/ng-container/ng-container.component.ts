import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component,  ElementRef,  ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent implements AfterViewInit{
  @ViewChild ('txt') textBox ?: ElementRef;
  constructor(private http: HttpClient) { }

  isApi: boolean = false;

  userData: any[] = [];
 
  ngAfterViewInit(): void {
    this.textBox?.nativeElement.value;
    // debugger;
  }

  getUser() {
    this.isApi = false
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.userData = res;
      this.isApi= true
    })
  }


}
