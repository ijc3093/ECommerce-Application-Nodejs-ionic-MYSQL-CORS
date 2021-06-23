import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HiltonPage } from './hilton.page';

describe('HiltonPage', () => {
  let component: HiltonPage;
  let fixture: ComponentFixture<HiltonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiltonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HiltonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
