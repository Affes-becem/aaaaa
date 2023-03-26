import {Component, OnInit} from '@angular/core';


import {AccountService, UserService} from '@app/_services';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '@app/_models';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'username', 'email', 'phoneNumber', 'actions'];
  users: User[];

  constructor(private accountService: AccountService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    console.log('in reloadData');
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
        },
        error => console.log(error)
      )

    ;
  }


  deleteUser(id: string) {
    console.log(id);
    const gateway = this.users.find(x => x.id === id);
    console.log(gateway);
    this.accountService.delete(id)
      .subscribe(() => {
          this.users = this.users.filter(x => x.id !== id);
        },
        error => console.log(error));

  }


}
