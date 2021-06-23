import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusbookPage } from './busbook.page';

describe('BusbookPage', () => {
  let component: BusbookPage;
  let fixture: ComponentFixture<BusbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
