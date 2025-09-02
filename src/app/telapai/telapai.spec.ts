import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telapai } from './telapai';

describe('Telapai', () => {
  let component: Telapai;
  let fixture: ComponentFixture<Telapai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Telapai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Telapai);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
