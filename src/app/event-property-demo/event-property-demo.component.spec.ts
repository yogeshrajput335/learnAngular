import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPropertyDemoComponent } from './event-property-demo.component';

describe('EventPropertyDemoComponent', () => {
  let component: EventPropertyDemoComponent;
  let fixture: ComponentFixture<EventPropertyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPropertyDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPropertyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
