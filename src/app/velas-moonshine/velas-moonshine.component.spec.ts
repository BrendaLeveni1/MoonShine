import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelasMoonshineComponent } from './velas-moonshine.component';

describe('VelasMoonshineComponent', () => {
  let component: VelasMoonshineComponent;
  let fixture: ComponentFixture<VelasMoonshineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VelasMoonshineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelasMoonshineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
