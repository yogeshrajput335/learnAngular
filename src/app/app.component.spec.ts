import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiConsume } from './chandra/api/apiconsume.component';

describe('ApiConsume', () => {
  let component: ApiConsume;
  let fixture: ComponentFixture<ApiConsume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiConsume]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApiConsume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});