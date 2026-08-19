import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { JigForm } from './pages/jig-form/jig-form';
import { QualityForm } from './pages/quality-form/quality-form';
import { Requests } from './pages/requests/requests';
import { DrawingComponent } from './pages/drawing-component/drawing-component';
import { ProduceComponent } from './pages/produce-component/produce-component';
import { QualityComponent } from './pages/quality-component/quality-component';
import { HandoverComponent } from './pages/handover-component/handover-component';
import { authGuard } from './core/guards/auth-guard';
import { roleGuardGuard } from './core/guards/role-guard-guard';
import { Unauthorized } from './pages/unauthorized/unauthorized';
import { Layout } from './layout/layout/layout';
import { permissionGuard } from './core/guards/permission-guard';

export const routes: Routes = [
    {
        path: 'login',
        component: Login 
    },
     
    {
    path: '**',
    redirectTo: 'layout'
    },

    {
    path: '',
    component: Layout,
    canActivate: [authGuard],

    children: [

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
        path:'quality',
        component: QualityComponent,
        canActivate:[roleGuardGuard],
        data: {
        roles:['ADMIN']
    }
    },
        {
            path: 'qualityform',
            component: QualityForm,
            canActivate: [roleGuardGuard],
            data: {
                roles: ['ADMIN']
            }
        },

        {
            path: 'requests/:id',
            component: Requests,
            canActivate: [roleGuardGuard,permissionGuard],
            data: {
                roles: ['ADMIN', 'MANAGER'],
                permission : ['REQUEST_READ' , 'REQUEST_UPDATE'],
                mode : 'all'
            }
        },

        {
            path: 'drawing',
            component: DrawingComponent,
            canActivate: [roleGuardGuard,permissionGuard],
            data: {
                roles: ['ADMIN', 'MANAGER'],
                permission : ['REQUEST_READ' , 'REQUEST_UPDATE','USER_CREATE'],
                mode : 'all'
            }
        },
            {
        path:'handover',
        component: HandoverComponent,
        canActivate:[roleGuardGuard],
        data: {
        roles:['ADMIN', 'MANAGER']
    }
    },

        {
            path: 'produce',
            component: ProduceComponent,
            canActivate: [roleGuardGuard],
            data: {
                roles: ['ADMIN', 'MANAGER']
            }
        },
        {
        path: 'unauthorized',
        component: Unauthorized
    }

    ]
},
  

];
