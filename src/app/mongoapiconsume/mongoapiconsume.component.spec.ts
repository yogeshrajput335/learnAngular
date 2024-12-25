import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoapiconsumeComponent } from './mongoapiconsume.component';

describe('MongoapiconsumeComponent', () => {
  let component: MongoapiconsumeComponent;
  let fixture: ComponentFixture<MongoapiconsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MongoapiconsumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongoapiconsumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
