import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayanTombComponent } from './mayan-tomb.component';
import { TombComponent } from './tomb/tomb.component';
import { StatueComponent } from './statue/statue.component';
import { ButtonComponent } from '../shared/button/button.component';

describe('MayanTombComponent', () => {
  let component: MayanTombComponent;
  let fixture: ComponentFixture<MayanTombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayanTombComponent, TombComponent, StatueComponent, ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayanTombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
