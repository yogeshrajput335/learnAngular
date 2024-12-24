import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppapiconsumeComponent } from './appapiconsume.component';

describe('AppapiconsumeComponent', () => {
  let component: AppapiconsumeComponent;
  let fixture: ComponentFixture<AppapiconsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppapiconsumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppapiconsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
