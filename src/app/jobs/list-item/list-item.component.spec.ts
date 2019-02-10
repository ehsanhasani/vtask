import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';
import { Job } from '../job';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should does not show job detail if job does not exist', () => {
    const job: Job = null;

    component.job = job;
    fixture.detectChanges();
    const jobElement: HTMLElement = fixture.nativeElement;
    const h3 = jobElement.querySelector('h3');
    expect(h3).toBe(null);
  });

  it('should show job detail title', () => {
    const job: Job = {
      position_title: 'Registered Nurse INTENSIVE CARE UNIT',
      organization_name: 'Veterans Affairs, Veterans Health Administration',
      start_date: '',
      end_date: '',
      locations: [],
      url: ''
    };

    component.job = job;
    fixture.detectChanges();
    const jobElement: HTMLElement = fixture.nativeElement;
    const h3 = jobElement.querySelector('h3');
    expect(h3.textContent).toEqual(job.position_title);
  });
});
