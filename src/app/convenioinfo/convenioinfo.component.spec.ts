import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioinfoComponent } from './convenioinfo.component';

describe('ConvenioinfoComponent', () => {
  let component: ConvenioinfoComponent;
  let fixture: ComponentFixture<ConvenioinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvenioinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
