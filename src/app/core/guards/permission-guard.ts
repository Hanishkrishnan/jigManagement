import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { isPlatformBrowser } from '@angular/common';
import { PermissionConfig } from '../../data/permission-config';

export const permissionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const  platformId = inject(PLATFORM_ID);

  if (!isPlatformBrowser(platformId)) {
    return true;
  }
  const config = route.data['permission'] as PermissionConfig;
  
  if(route.data['mode'] === 'all' && authService.hasAllPermission(route.data['permission'])){
     return true; 
     }
     if(route.data['mode'] === 'any' && authService.hasPermission(route.data['permission'])){
     return true; 
     }
  
return router.createUrlTree(['/unauthorized'], {queryParams : {returnUrl : state.url}});;
}
