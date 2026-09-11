import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'login',
		loadComponent: () => import('./layouts/login-page/login-page').then((component) => component.LoginPage)
	},
	{
		path: 'employee-registration',
		loadComponent: () =>
			import('./layouts/employee-registration/employee-registration').then(
				(component) => component.EmployeeRegistration
			)
	},
	{ path: 'register', pathMatch: 'full', redirectTo: 'employee-registration' },
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: '**', redirectTo: 'login' }
];
