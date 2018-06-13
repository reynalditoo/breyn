import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
export interface IMessage {
  name?: string,
  email?: string,
  subject?: string,
  message?: string
}
 
@Injectable()
export class ContactService {
 
  constructor(private http: Http) {}
 
  sendMail(form: IMessage): Observable<IMessage> | any {
    let headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post('https://www.breyn.net/mail.php', form, {headers: headers}) // en local : http://localhost/sambuca/mail.php | en ligne : http://sambuca.breyn.net/mail.php
      .map(response => {
        /*console.log('Sending was successfull', response);*/
        return response;
      })
      .catch(error => {
        /*console.log('Sending got some error', error);*/
        return Observable.throw(error);
      })
  }
}