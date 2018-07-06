import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasClienteComponent } from './recetas-cliente.component';

describe('RecetasClienteComponent', () => {
  let component: RecetasClienteComponent;
  let fixture: ComponentFixture<RecetasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
