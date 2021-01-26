import { IEmployee } from './../models/deptinfo.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employees: IEmployee[]= [
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

  constructor() { }

  ngOnInit(): void {
  }

}
