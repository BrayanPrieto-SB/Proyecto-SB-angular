import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearconvenioComponent } from './crearconvenio.component';

describe('ContactComponent', () => {
  let component: CrearconvenioComponent;
  let fixture: ComponentFixture<CrearconvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearconvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearconvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});