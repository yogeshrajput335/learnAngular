import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeftComponent } from './my-left.component';

describe('MyLeftComponent', () => {
  let component: MyLeftComponent;
  let fixture: ComponentFixture<MyLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
