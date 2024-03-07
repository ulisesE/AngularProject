import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplenumerosComponent } from './multiplenumeros.component';

describe('MultiplenumerosComponent', () => {
  let component: MultiplenumerosComponent;
  let fixture: ComponentFixture<MultiplenumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplenumerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiplenumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
