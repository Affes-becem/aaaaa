import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDataStreamingComponent } from './sensor-data-streaming.component';

describe('SensorDataStreamingComponent', () => {
  let component: SensorDataStreamingComponent;
  let fixture: ComponentFixture<SensorDataStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorDataStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDataStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
