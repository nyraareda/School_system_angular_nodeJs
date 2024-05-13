import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; // Import Router instead of RouterLink
import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone:true,
  imports:[CommonModule,FormsModule],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() logoutClicked = new EventEmitter<void>();

  constructor(public account: AccountService, private router: Router) {}

  onLogoutClick() {
    this.account.logout();
    this.router.navigateByUrl('/login');
  }

}
