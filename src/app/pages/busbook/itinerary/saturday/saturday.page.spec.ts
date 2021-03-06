import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaturdayPage } from './saturday.page';

describe('SaturdayPage', () => {
  let component: SaturdayPage;
  let fixture: ComponentFixture<SaturdayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturdayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaturdayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
