import { Injectable } from '@angular/core';
import * as Parse from 'parse';
let parse = require('parse');

import { environment } from '../../environments/environment';

parse.initialize(environment.PARSE.APP_ID);
parse.serverURL = environment.PARSE.SERVER_URL;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authToken = '';

  login(username, password) {
    return new Promise<void>(async (resolve, reject) => {
      parse.User.logIn(username, password).then(
        (success) => {
          // DEBUG
          console.log('SUCCESSFULL LOGIN!');
          this.authToken = this.getAuthToken();

          resolve();
        },
        (err) => {
          // DEBUG
          console.log('LOGIN FAILURE...');
          this.authToken = this.getAuthToken();
          reject(err);
        }
      );
    });
  }

  getAuthToken() {
    let loggedUser = parse.User.current();
    if (loggedUser) {
      // DEBUG
      console.log('TOKEN IS: ', loggedUser.getSessionToken());
      return loggedUser.getSessionToken();
    } else {
      // DEBUG
      console.log('SESSION TOKEN NOT EXISTENT...');
      return;
    }
  }
}
