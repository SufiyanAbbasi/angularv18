import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../services/department.service';
import { AlertComponent } from "../../../reusablecomponents/alert/alert.component";
import { IDepartmentList } from '../../../models/interfaces/idepartment-list';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  getallData: IDepartmentList[] = [];

  deptObj = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": "",
  }
  http = inject(HttpClient)

  constructor(private deptSrv: DepartmentService) { }

  ngOnInit(): void {
    this.getDept();
  }

  // onPost() {
  //   // debugger;
  //   this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.deptObj).subscribe((res: any) => {
  //     // debugger;
  //     if (res.result) {
  //       alert("Department Created Successfully")
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }

  //same upper code of post api with service
  onPost() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Created Successfully")
      } else {
        alert(res.message)
      }
    })
  }

  // getDept() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
  //     this.getallData = res.data;
  //   })
  // }

  // same upper code with department Service 
  getDept() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.getallData = res.data;
    })
  }

  onEdit(deptdata: any) {
    this.deptObj = deptdata;
  }

  onUpdate() {
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment', this.deptObj).subscribe((res: any) => {
      // debugger;
      if (res.result) {
        alert("Department Updated Successfully")
      } else {
        alert(res.message)
      }
    })

  }

  onDelete(id: number) {
    this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' + id).subscribe((res: any) => {
      // debugger;
      if (res.result) {
        alert("Department Deleted Successfully")
      } else {
        alert(res.message)
      }
    })

  }
}
