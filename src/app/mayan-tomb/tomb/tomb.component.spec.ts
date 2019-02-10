import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TombComponent } from './tomb.component';
import { StatueComponent } from '../statue/statue.component';

describe('TombComponent', () => {
  let component: TombComponent;
  let fixture: ComponentFixture<TombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TombComponent, StatueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
