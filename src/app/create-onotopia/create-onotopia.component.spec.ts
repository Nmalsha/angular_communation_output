import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnotopiaComponent } from './create-onotopia.component';

describe('CreateOnotopiaComponent', () => {
  let component: CreateOnotopiaComponent;
  let fixture: ComponentFixture<CreateOnotopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOnotopiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnotopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
