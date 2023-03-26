import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRunningConnectorsComponent } from './list-running-connectors.component';

describe('ListRunningConnectorsComponent', () => {
  let component: ListRunningConnectorsComponent;
  let fixture: ComponentFixture<ListRunningConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRunningConnectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRunningConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
