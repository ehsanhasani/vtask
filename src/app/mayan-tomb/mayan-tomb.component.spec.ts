import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayanTombComponent } from './mayan-tomb.component';

describe('MayanTombComponent', () => {
  let component: MayanTombComponent;
  let fixture: ComponentFixture<MayanTombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayanTombComponent ]
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
