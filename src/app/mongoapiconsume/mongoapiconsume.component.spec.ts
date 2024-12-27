import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoapiconsumeComponent } from './mongoapiconsume.component';
import { HttpClientModule } from '@angular/common/http';

describe('MongoapiconsumeComponent', () => {
  let component: MongoapiconsumeComponent;
  let fixture: ComponentFixture<MongoapiconsumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MongoapiconsumeComponent,HttpClientModule]
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
