import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VernumeroComponent } from './vernumero.component';

describe('VernumeroComponent', () => {
  let component: VernumeroComponent;
  let fixture: ComponentFixture<VernumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VernumeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VernumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
