import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConverterFromHexComponent } from './converter-from-hex.component';
import { ConverterModule } from '../converter.module';
import { ConverterFromHexPageObject } from './converter-from-hex.component.po';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const urlToSave = 'http://localhost:4200/save-hex';

describe('ConverterFromHexComponent', () => {
  let component: ConverterFromHexComponent;
  let fixture: ComponentFixture<ConverterFromHexComponent>;
  let page: ConverterFromHexPageObject;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConverterModule, HttpClientTestingModule]
    })
      .compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterFromHexComponent);
    component = fixture.componentInstance;
    page = new ConverterFromHexPageObject(fixture.nativeElement);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear', async () => {
    page.hex('112233');
    expect(page.hex()).toBe('112233');
    await page.clear();
    fixture.detectChanges();
    expect(page.hex()).toBe('');
  });

  it('should convert', async () => {
    page.hex('123123');
    expect(page.rgb()).toBe('');
    page.calc();
    const req = httpTestingController.expectOne(urlToSave);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body.hex).toEqual('123123');
    req.flush({});
    await fixture.detectChanges();
    expect(page.rgb()).toBe('rgb(18, 49, 35)');
  });

  it('should convert three-digit hex', async () => {
    page.hex('567');
    expect(page.rgb()).toBe('');
    page.calc();
    const req = httpTestingController.expectOne(urlToSave);
    expect(req.request.method).toEqual('POST');
    req.flush({});
    await fixture.detectChanges();
    expect(page.rgb()).toBe('rgb(85, 102, 119)');
  });

  it('rgb should be empty when entered incorrectly hex', async () => {
    page.hex('qw123we');
    page.calc();
    const req = httpTestingController.expectNone(urlToSave);
    await fixture.detectChanges();
    expect(page.rgb()).toBe('');
  });

});
