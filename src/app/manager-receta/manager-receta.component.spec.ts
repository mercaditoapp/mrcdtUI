import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRecetaComponent } from './manager-receta.component';

describe('ManagerRecetaComponent', () => {
  let component: ManagerRecetaComponent;
  let fixture: ComponentFixture<ManagerRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
