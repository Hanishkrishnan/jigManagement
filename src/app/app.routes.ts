import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { JigForm } from './pages/jig-form/jig-form';
import { QualityForm } from './pages/quality-form/quality-form';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'jigform',
        component: JigForm
    },
    {
    path: 'qualityform',
    component: QualityForm
  }
    // {
    //     path: 'quality-form/:id',
    //     component: QualityForm
    // }
];
