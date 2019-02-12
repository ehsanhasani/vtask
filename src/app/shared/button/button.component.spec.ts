import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title work', () => {
    component.title = 'click';
    const buttonElement: HTMLElement = fixture.nativeElement;
    const button = buttonElement.querySelector('button');
    fixture.detectChanges();
    expect(button.textContent).toEqual('click');
  });
});
