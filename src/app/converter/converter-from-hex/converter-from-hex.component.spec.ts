import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterFromHexComponent } from './converter-from-hex.component';

describe('ConverterFromHexComponent', () => {
  let component: ConverterFromHexComponent;
  let fixture: ComponentFixture<ConverterFromHexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterFromHexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterFromHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
