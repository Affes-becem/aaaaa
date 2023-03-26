import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedConnectorComponent } from './searched-connector.component';

describe('SearchedConnectorComponent', () => {
  let component: SearchedConnectorComponent;
  let fixture: ComponentFixture<SearchedConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedConnectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
