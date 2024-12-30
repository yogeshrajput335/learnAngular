import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangodbnewComponentComponent } from './mangodbnew.component.component';

describe('MangodbnewComponentComponent', () => {
  let component: MangodbnewComponentComponent;
  let fixture: ComponentFixture<MangodbnewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangodbnewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangodbnewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
