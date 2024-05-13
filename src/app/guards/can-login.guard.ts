import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

export const canLoginGuard: CanActivateFn = (route, state) => {

  let accountService=inject(AccountService);

  if(accountService.isLogged){
    return true;
  }else{
    let router =inject(Router);
    router.navigateByUrl("/login");
    return false;

  }
};
