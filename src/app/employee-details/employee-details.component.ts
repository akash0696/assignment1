import { IEmployee } from './../models/deptinfo.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  SortBy:any;
  employees: IEmployee[];
  allEmployees: IEmployee[];

  //creating an object for storing filter data and bind to html table
  public EmployeeDetails:object = [];

  //filter employee details on departments and return employeeDetails object
  public DepartmentName:string[] = ['Computer','Physics','Chemistry'];
  sortByselected:number;
  modifiedTable:string;


  constructor() {
    this.SortBy = [{id:1,name:'name(a-z)'},{id:2,name:'name(z-a)'},{id:3,name:'age'},{id:4,name:'email'}];
    this.sortByselected=1;
    this.employees = [
      {
        name: "Employee One",
        age: 40,
        email: "one@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "Employee Two",
        age: 10,
        email: "Two@gmail.com",
        departments: ["Computer"],
      },
      {
        name: "Employee Three",
        age: 10,
        email: "Three@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "Employee Four",
        age: 60,
        email: "Four@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "Employee Five",
        age: 70,
        email: "Five@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "Employee Six",
        age: 70,
        email: "Six@gmail.com",
        departments: ["Computer", "Physics"],
      }
    ];
    this.allEmployees = [...this.employees];
   }

  ngOnInit(): void {

  }

  fetchEmployee(department: string[]){
    let obj = this.allEmployees.filter(m => m.departments == department);
    this.EmployeeDetails =obj;
    console.log(this.EmployeeDetails);
    return this.EmployeeDetails;
  }


  onDropdownSelected(val:any){
    this.customSort(val);
  }

  customSort(val:any){
    this.modifiedTable = "the value" + val +"was selected from dropdown";
  }

}
