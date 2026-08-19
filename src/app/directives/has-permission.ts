import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../core/services/auth-service';
import { User } from '../models/user';
import { Permission } from '../data/permission';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermission {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);
  authService = inject(AuthService);

  permission = input.required<Permission|Permission[]>({ alias : 'appHasPermission'});
  
  constructor(){
    effect(() => {
      const permission = this.permission();
      const permissions = Array.isArray(permission) ? permission : [permission];

      this.viewContainerRef.clear();

      if (this.authService.hasAllPermission(permissions)) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }

}
