import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExpandComponent } from './navbar-expand.component';

describe('NavbarExpandComponent', () => {
  let component: NavbarExpandComponent;
  let fixture: ComponentFixture<NavbarExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
