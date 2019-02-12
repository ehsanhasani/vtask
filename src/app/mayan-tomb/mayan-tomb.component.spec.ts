import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayanTombComponent } from './mayan-tomb.component';
import { TombComponent } from './tomb/tomb.component';
import { StatueComponent } from './statue/statue.component';
import { ButtonComponent } from '../shared/button/button.component';
import { Tomb } from './tomb';

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

  it('should create tombs array', () => {
    component.create2DTomb(11);
    fixture.detectChanges();
    expect(component.tombsDimentional.length).toEqual(11);
  });

  it('should create tombs array and element instance of Tomb', () => {
    component.create2DTomb(11);
    fixture.detectChanges();
    expect(component.tombsDimentional[0][0] instanceof Tomb).toBeTruthy();
  });

  it('should calculate work correctly', () => {
    component.create2DTomb(11);
    fixture.detectChanges();
    component.calculate();
    fixture.detectChanges();
    expect(component.lazer).toEqual(0);
  });

  it('should calculate work correctly return one if has one statue', () => {
    component.create2DTomb(11);
    fixture.detectChanges();
    component.tombsDimentional[0][0].setStatue();
    fixture.detectChanges();
    component.calculate();
    fixture.detectChanges();
    expect(component.lazer).toEqual(1);
  });

  it('should calculate work correctly return one if has two statue in one slope', () => {
    component.create2DTomb(11);
    fixture.detectChanges();
    component.tombsDimentional[3][3].setStatue();
    component.tombsDimentional[4][4].setStatue();
    fixture.detectChanges();
    component.calculate();
    fixture.detectChanges();
    expect(component.lazer).toEqual(1);
  });
});
