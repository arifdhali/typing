import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: "", component: AppComponent,
    },
    {
        path: "auth/login", component: LoginComponent
    }
];
