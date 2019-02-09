import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBrandComponent } from './navbar-brand.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarBrandComponent', () => {
  let component: NavbarBrandComponent;
  let fixture: ComponentFixture<NavbarBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarBrandComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check title @input', () => {
    const navbarBrand: HTMLElement = fixture.nativeElement;
    const a = navbarBrand.querySelector('a');
    expect(a.textContent).toEqual('');
    component.title = 'jobs';
    fixture.detectChanges();
    expect(a.textContent).toEqual('jobs');
  });
});
