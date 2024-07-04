import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelasContactoComponent } from './velas-contacto.component';

describe('VelasContactoComponent', () => {
  let component: VelasContactoComponent;
  let fixture: ComponentFixture<VelasContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VelasContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelasContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
