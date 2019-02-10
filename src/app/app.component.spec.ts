import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarLinkComponent } from './shared/navbar/navbar-link/navbar-link.component';
import { NavbarBrandComponent } from './shared/navbar/navbar-brand/navbar-brand.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { TombComponent } from './mayan-tomb/tomb/tomb.component';
import { StatueComponent } from './mayan-tomb/statue/statue.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        NavbarLinkComponent,
        NavbarBrandComponent,
        LoadingComponent,
        TombComponent,
        StatueComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vtask'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('vtask');
  });

});
