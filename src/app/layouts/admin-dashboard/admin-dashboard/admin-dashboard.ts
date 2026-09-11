import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Employee {
  name: string;
  role: string;
  department: string;
  status: 'Active' | 'On leave';
  initials: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
  readonly employees: Employee[] = [
    { name: 'Maya Chen', role: 'Product Designer', department: 'Design', status: 'Active', initials: 'MC' },
    { name: 'Jon Bell', role: 'Senior Engineer', department: 'Engineering', status: 'Active', initials: 'JB' },
    { name: 'Sofia Patel', role: 'Marketing Lead', department: 'Marketing', status: 'On leave', initials: 'SP' },
    { name: 'Ethan Wright', role: 'Operations Manager', department: 'Operations', status: 'Active', initials: 'EW' }
  ];

  get activeEmployees(): number {
    return this.employees.filter((employee) => employee.status === 'Active').length;
  }
}
