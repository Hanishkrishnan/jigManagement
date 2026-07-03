import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { JigForm } from './pages/jig-form/jig-form';
import { QualityForm } from './pages/quality-form/quality-form';
import { Requests } from './pages/requests/requests';

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
    },
    {
        path:'requests/:id',
        component: Requests
    }
    // {
    //     path: 'quality-form/:id',
    //     component: QualityForm
    // }
];
