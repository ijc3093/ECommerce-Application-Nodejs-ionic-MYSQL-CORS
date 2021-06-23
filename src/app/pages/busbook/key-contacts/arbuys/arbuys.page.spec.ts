import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbuysPage } from './arbuys.page';

describe('ArbuysPage', () => {
  let component: ArbuysPage;
  let fixture: ComponentFixture<ArbuysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbuysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbuysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
