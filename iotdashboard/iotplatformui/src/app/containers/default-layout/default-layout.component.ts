import {Component, OnInit} from '@angular/core';
import {navItems} from '../../_nav';
import {AccountService} from '@app/_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  userValue: any;
  id: string;
  role: string;


  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.userValue = this.accountService.userValue;
    this.id = this.userValue.user.id;
    this.role = this.userValue.user.roles[0].role;
  }

  logout() {
    this.accountService.logout();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
