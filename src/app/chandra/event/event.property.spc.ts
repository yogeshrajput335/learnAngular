import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTwowayComponent } from './event.property';

describe('EventPropertyDemoComponent', () => {
  let component: EventTwowayComponent;
  let fixture: ComponentFixture<EventTwowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTwowayComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventTwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
