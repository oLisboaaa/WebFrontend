import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telafilho2 } from './telafilho2';

describe('Telafilho2', () => {
  let component: Telafilho2;
  let fixture: ComponentFixture<Telafilho2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Telafilho2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Telafilho2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
