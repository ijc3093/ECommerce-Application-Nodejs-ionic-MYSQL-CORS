import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalsheetPage } from './medicalsheet.page';

describe('MedicalsheetPage', () => {
  let component: MedicalsheetPage;
  let fixture: ComponentFixture<MedicalsheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalsheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalsheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
