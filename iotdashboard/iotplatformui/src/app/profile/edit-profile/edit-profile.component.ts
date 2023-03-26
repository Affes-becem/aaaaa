import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AccountService} from '@app/_services';
import {User} from '@app/_models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.less']
})
export class EditProfileComponent implements OnInit {

  id: string;
  editForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.editForm = this.formBuilder.group({

      firstName: [],
      lastName: [],
      email: [],
      phoneNumber: [],


    });
  }

  onSubmit() {
    this.updateProfile();
  }

  updateProfile() {
    this.id = this.accountService.userValue.user.userDetails.id;
    console.log(this.id);
    this.accountService.update(this.id, this.editForm.value).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
