import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceService} from '@app/_services/device.service';
import {first} from 'rxjs/operators';
import {Node} from '@app/_models';

@Component({
  selector: 'app-update-node',
  templateUrl: './update-node.component.html',
  styleUrls: ['./update-node.component.less']
})
export class UpdateNodeComponent implements OnInit {

  node: Node = new Node();
  submitted = false;
  loading = false;
  form: FormGroup;
  gateways = null;
  id: string;
  defaultStatus;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceService: DeviceService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.node = new Node();

    this.id = this.route.snapshot.params.id;

    this.deviceService.getAllGateways()
      .pipe(first())
      .subscribe(gateways => this.gateways = gateways);

    this.deviceService.getNodeById(this.id)
      .subscribe(data => {
        console.log(data);
        this.node = data;
      });


    this.form = this.formBuilder.group({
      gateway: ['', Validators.required],
      nameNode: ['', Validators.required],
      address: [''],
      manufacturer: ['', Validators.required],
      type: ['', Validators.required],
      memoryCapacity: ['', Validators.required],
      calculationCapacity: ['', Validators.required],
      risidualEnergy: ['', Validators.required],
      installDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  updateNode() {
    console.log(this.id + this.node);
    this.deviceService.updateNode(this.id, this.form.value)
      .subscribe(data => {

        this.node = new Node();
        this.goToList();
      });
  }

  onSubmit() {
    this.updateNode();
  }

  goToList() {
    this.router.navigate(['/nodes']);
  }

}
