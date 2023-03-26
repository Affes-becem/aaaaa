import {Component, OnInit} from '@angular/core';
import {Node} from '@app/_models';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DeviceService} from '@app/_services/device.service';
import {AlertService} from '@app/_services';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.less']
})
export class CreateNodeComponent implements OnInit {

  node: Node = new Node();
  submitted = false;
  loading = false;
  form: FormGroup;
  gateways = null;
  private idGateway: any;

  constructor(private deviceService: DeviceService, private alertService: AlertService, private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.deviceService.getAllGateways()
      .pipe(first())
      .subscribe(gateways => this.gateways = gateways);
    this.submitted = false;
    this.node = new Node();
    this.form = this.formBuilder.group({
      idGateway: ['', Validators.required],
      address: [],
      nameNode: ['', Validators.required],
      manufacturer: ['', Validators.required],
      type: ['', Validators.required],
      memoryCapacity: ['', Validators.required],
      calculationCapacity: ['', Validators.required],
      risidualEnergy: ['', Validators.required],
      /*installDate: ['', Validators.required],
      status: ['', Validators.required],
*/
    });

  }

  save() {

    this.deviceService
      .saveNode(this.form.value).subscribe(data => {
        console.log(this.form.value);
        this.node = new Node();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/nodes']);
  }


}
