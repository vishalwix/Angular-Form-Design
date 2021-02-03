import { Component, OnInit } from '@angular/core';

import { EmployeeService} from '../../shared/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private snackBar:MatSnackBar, public service: EmployeeService) { }

  departments = [
    {id:1, value:'Dep 1'},
    {id:2, value:'Dep 2'},
    {id:3, value:'Dep 3'}
  ]

  ngOnInit(): void {
  }

  onClear(){
    this.snackBar.open('Input cleared successfully...!','',{duration:2000, panelClass: ['red-snackbar', 'login-snackbar'], horizontalPosition: "right",
       verticalPosition: "top"});
    this.service.form.reset();
    this.service.InitializeFormGroup();
  }

}
