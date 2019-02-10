import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsComponent } from './jobs.component';
import { JobsService } from './jobs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ JobsComponent, ListComponent, ListItemComponent ],
      providers: [ JobsService ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should h1 title exists', () => {
    fixture.detectChanges();
    const jobElement: HTMLElement = fixture.nativeElement;
    const h1 = jobElement.querySelector('h1');
    expect(h1.textContent).toEqual('Jobs');
  });
});
