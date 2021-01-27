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
  empField:string;
  ErrorMessage:string= null;

  //creating an object for storing filter data and bind to html table
  public EmployeeDetails:object = [];

  //filter employee details on departments and return employeeDetails object
  public DepartmentName:string[] = ['Computer','Physics','Chemistry'];
  sortByselected:string;



  selectedDepartment: string = '';



  constructor() {

    this.SortBy = [{id:1,name:'name(a-z)'},{id:2,name:'name(z-a)'},{id:3,name:'age'},{id:4,name:'email'}];
    this.sortByselected= this.SortBy[0].name;
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

  selectChangeHandler(event: any){
    this.selectedDepartment = event.target.value;
    this.allEmployees= [];
    if(this.selectedDepartment === "department"){
      this.allEmployees = this.employees;
      return;
    }else{
    for(let i=0; i< this.employees.length;i++){
      if(this.employees[i].departments.includes(this.selectedDepartment)){
        this.allEmployees.push(this.employees[i]);
      }
    }
  }
  }

//searching for name and email
Search(){
  if(this.empField.includes("@")){
    this.allEmployees= this.allEmployees.filter(res => {
      return res.email.toLocaleLowerCase().match(this.empField.toLocaleLowerCase());
    });
  }
  else{
     this.allEmployees= this.allEmployees.filter(res => {
        return res.name.toLocaleLowerCase().match(this.empField.toLocaleLowerCase());
     });
     if(this.allEmployees.length===0)
     {
      this.ErrorMessage = "no employee found";
     }
  }
}

//Reset the employee details
Reset(){
  this.ErrorMessage= null;
  // console.log(this.employees);
  this.allEmployees= this.employees;
  // return this.allEmployees;

}


}
