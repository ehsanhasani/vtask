import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotfoundComponent } from './list-notfound.component';

describe('ListNotfoundComponent', () => {
  let component: ListNotfoundComponent;
  let fixture: ComponentFixture<ListNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
