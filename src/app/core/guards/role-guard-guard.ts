import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { isPlatformBrowser } from '@angular/common';

export const roleGuardGuard: CanActivateFn = (route, state) => {

  const authservice = inject(AuthService);
  const router = inject(Router)
  const platformId = inject(PLATFORM_ID)

   // SSR
  if (!isPlatformBrowser(platformId)) {
    return true;
  }
  const roleData = route.data['roles'] as string[];
  if(!authservice.currentUser()){
     return router.createUrlTree(['/login']);
  }
  const loggedInUser = authservice.currentUser();
  if(loggedInUser && roleData.includes(loggedInUser.role)){
    return true;
  }
  return router.createUrlTree(['/unauthorized'] , {queryParams : {returnUrl : state.url}});
};
