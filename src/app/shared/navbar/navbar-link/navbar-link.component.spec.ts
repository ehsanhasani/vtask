import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';

import { NavbarLinkComponent } from './navbar-link.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MayanTombComponent } from 'src/app/mayan-tomb/mayan-tomb.component';
import { TombComponent } from 'src/app/mayan-tomb/tomb/tomb.component';
import { StatueComponent } from 'src/app/mayan-tomb/statue/statue.component';

describe('NavbarLinkComponent', () => {
  let component: NavbarLinkComponent;
  let fixture: ComponentFixture<NavbarLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLinkComponent, MayanTombComponent, TombComponent, StatueComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'mayan', component: MayanTombComponent }
         ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLinkComponent);
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

  it('should go to url',
    async(inject([Router, Location], (router: Router, location: Location) => {
    component.href = 'mayan';
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/mayan');
    });
  })));
});
