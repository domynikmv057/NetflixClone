import { Injectable } from '@angular/core';
import { users } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class UserInMainService {
  userLogged:users

  constructor() { }

}
