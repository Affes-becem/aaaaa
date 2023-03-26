import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoredConnectorsComponent } from './list-stored-connectors.component';

describe('ListStoredConnectorsComponent', () => {
  let component: ListStoredConnectorsComponent;
  let fixture: ComponentFixture<ListStoredConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStoredConnectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStoredConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
