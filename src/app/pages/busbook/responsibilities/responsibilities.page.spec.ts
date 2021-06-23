import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResponsibilitiesPage } from './responsibilities.page';

describe('ResponsibilitiesPage', () => {
  let component: ResponsibilitiesPage;
  let fixture: ComponentFixture<ResponsibilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibilitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsibilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
