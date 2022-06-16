import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  employees: any[];
  constructor()
  {
    this.employees = [
      { code: 'emp101', name: 'John Mike', gender: 'Male', annualSalary: 5500, dateOfBirth: '24/12/1988' },
      { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '09/06/1982' },
      { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/08/1979' },
      { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500,  dateOfBirth: '03/10/1980', },
    ];
  }
  getEmployees(): void {
    this.employees = [
      { code: 'emp101', name: 'John Mike', gender: 'Male', annualSalary: 5500, dateOfBirth: '24/12/1988' },
      { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700, dateOfBirth: '09/06/1982' },
      { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/08/1979' },
      { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500,  dateOfBirth: '03/10/1980' },
      { code: 'emp105', name: 'Emma', gender: 'Female', annualSalary: 5500,  dateOfBirth: '05/10/1980', }
    ];
  }

  // ***** Code for Class Binding *****
  classesToApply: string = 'colorClass italicClass sizeClass';
  applyColorClass: boolean = true; // toggle value by placing !
  applyItalicClass: boolean = true;
  applySizeClass: boolean = true;
  addClasses() {
    let classes = {
      colorClass: this.applyColorClass,
      italicClass: this.applyItalicClass,
      sizeClass: this.applySizeClass,
    };
    return classes;
  }

}
