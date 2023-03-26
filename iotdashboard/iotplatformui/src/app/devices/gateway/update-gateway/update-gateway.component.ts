import {Component, OnInit} from '@angular/core';
import {Gateway} from '@app/_models';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceService} from '@app/_services/device.service';


@Component({
  selector: 'app-update-gateway',
  templateUrl: './update-gateway.component.html',
  styleUrls: ['./update-gateway.component.less']
})
export class UpdateGatewayComponent implements OnInit {
  gateway: Gateway = new Gateway();
  submitted = false;
  loading = false;
  form: FormGroup;
  id: string;
  ipAddress;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.deviceService.getGatewayById(this.id)
      .subscribe(data => {

        this.gateway = data;

      });


    this.form = this.formBuilder.group({
      ipAddress: ['', Validators.required],
      typeGateway: ['', Validators.required],
      installDate: ['', Validators.required],
      status: ['', Validators.required]
    });


  }

  updateGateway() {
    console.log(this.id + this.gateway);
    this.deviceService.updateGateway(this.id, this.form.value)
      .subscribe(data => {

        this.gateway = new Gateway();
        this.goToList();
      });
  }

  onSubmit() {
    this.updateGateway();
  }

  goToList() {
    this.router.navigate(['/gateways']);
  }


}
