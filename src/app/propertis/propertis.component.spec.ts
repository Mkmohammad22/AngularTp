import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertisComponent } from './propertis.component';

describe('PropertisComponent', () => {
  let component: PropertisComponent;
  let fixture: ComponentFixture<PropertisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
