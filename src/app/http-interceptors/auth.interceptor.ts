import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('loginToken')
        if(req.headers.get('No-Auth')==='true') {
            return next.handle(req)
        }
        const authReq = req.clone({
            headers:req.headers.set('Authorization',`Bearer ${token}`)
        })
        console.log('111')
        return next.handle(authReq).pipe(
            tap(
                ok=>{},
                error=>{
                    if(error.status === 401) {
                        localStorage.removeItem('loginToken')
                        this.router.navigate(['/login'])
                    } 
                }
            )
        )
    }
}