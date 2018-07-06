import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaClienteComponent } from './receta-cliente.component';

describe('RecetaClienteComponent', () => {
  let component: RecetaClienteComponent;
  let fixture: ComponentFixture<RecetaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
