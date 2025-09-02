import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telafilho1 } from './telafilho1';

describe('Telafilho1', () => {
  let component: Telafilho1;
  let fixture: ComponentFixture<Telafilho1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Telafilho1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Telafilho1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
