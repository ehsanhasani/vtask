import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsComponent } from './jobs.component';
import { JobsService } from './jobs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ JobsComponent, ListComponent, ListItemComponent ],
      providers: [ JobsService ],
      imports: [HttpClientTestingModule]
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
});
