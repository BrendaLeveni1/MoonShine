import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelasAboutComponent } from './velas-about.component';

describe('VelasAboutComponent', () => {
  let component: VelasAboutComponent;
  let fixture: ComponentFixture<VelasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VelasAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VelasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
