import { Injectable } from '@angular/core';
import { IUser } from './user-model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';
import * as myGlobals from '../../shared/globals';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }

    loginUser(userName: string, password: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let loginInfo = { username: userName, password: password };

        return this.http.post(myGlobals.serviceRootUrl + 'Authenticate', JSON.stringify(loginInfo), options).map((response: Response) => {
            let user = <IUser>response.json();
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }).catch(this.handleError);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    isAuthenticated() {
        let user = localStorage.getItem('currentUser');
        return!!user;
    }
}