import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarnumerosComponent } from './ingresarnumeros.component';

describe('IngresarnumerosComponent', () => {
  let component: IngresarnumerosComponent;
  let fixture: ComponentFixture<IngresarnumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresarnumerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngresarnumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
