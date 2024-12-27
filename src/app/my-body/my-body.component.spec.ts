import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBodyComponent } from './my-body.component';

describe('MyBodyComponent', () => {
  let component: MyBodyComponent;
  let fixture: ComponentFixture<MyBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
      const fixture = TestBed.createComponent(MyBodyComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain('My Body');
    });
  
});
