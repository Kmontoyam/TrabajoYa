import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // El usuario se Logea si retorna True
            return true;
        }

        // No se logeara y lo retornara al Login
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}