import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvanceCrewCheckListPage } from './advance-crew-check-list.page';

describe('AdvanceCrewCheckListPage', () => {
  let component: AdvanceCrewCheckListPage;
  let fixture: ComponentFixture<AdvanceCrewCheckListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceCrewCheckListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvanceCrewCheckListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
