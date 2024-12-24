import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeApiComponent } from './consume-api.component';

describe('ConsumeAPIComponent', () => {
  let component: ConsumeApiComponent;
  let fixture: ComponentFixture<ConsumeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumeApiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConsumeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
