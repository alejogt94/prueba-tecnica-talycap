import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarClimaComponent } from './agregar-clima.component';

describe('AgregarClimaComponent', () => {
  let component: AgregarClimaComponent;
  let fixture: ComponentFixture<AgregarClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
