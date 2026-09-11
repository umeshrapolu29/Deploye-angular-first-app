import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-registration.html',
  styleUrl: './employee-registration.css'
})
export class EmployeeRegistration {
  fullName = '';
  workEmail = '';
  employeeId = '';
  department = '';
  submitted = false;

  submit(): void {
    this.submitted = true;
  }
}
