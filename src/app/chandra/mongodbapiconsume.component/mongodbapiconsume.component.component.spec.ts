import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbapiconsumeComponentComponent } from './mongodbapiconsume.component.component';
import { HttpClientModule } from '@angular/common/http';

describe('MongodbapiconsumeComponentComponent', () => {
  let component: MongodbapiconsumeComponentComponent;
  let fixture: ComponentFixture<MongodbapiconsumeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MongodbapiconsumeComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MongodbapiconsumeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
