import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SundayPage } from './sunday.page';

describe('SundayPage', () => {
  let component: SundayPage;
  let fixture: ComponentFixture<SundayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SundayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
