import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  isLogged=false;

  login(username:string,password:string){
    this.isLogged=true;
  }

}
