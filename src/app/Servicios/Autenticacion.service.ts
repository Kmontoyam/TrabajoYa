import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AutenticacionService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login Correcto
                if (user && user.token) {
                    // almacenar los detalles del Usuario y el token jwt en el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // eliminar al usuario del almacenamiento local para desconectar al usuario
        localStorage.removeItem('currentUser');
    }
}