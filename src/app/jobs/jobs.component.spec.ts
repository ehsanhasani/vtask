import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { JobsComponent } from './jobs.component';
import { JobsService } from './jobs.service';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListNotfoundComponent } from './list-notfound/list-notfound.component';



describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ JobsComponent, ListComponent, ListItemComponent, ListNotfoundComponent ],
      providers: [ JobsService ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
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
