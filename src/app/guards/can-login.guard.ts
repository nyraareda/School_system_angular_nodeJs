// auth.guard.ts
import { Injectable, inject } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import {CanActivateFn, Router} from '@angular/router';
import { DbStudent } from '../_models/db-student';


export const canLogin: CanActivateFn = (route, state) => {
  let student: DbStudent = new DbStudent(0, "", 0, "");
  let accService = inject(AccountService);
  if(accService.getToken(student)){
    return true
  }

  let router = inject(Router);
  router.navigateByUrl('/login');
  return false;
};
