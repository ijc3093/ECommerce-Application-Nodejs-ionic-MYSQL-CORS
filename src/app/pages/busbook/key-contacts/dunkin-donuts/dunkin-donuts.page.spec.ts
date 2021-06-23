import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DunkinDonutsPage } from './dunkin-donuts.page';

describe('DunkinDonutsPage', () => {
  let component: DunkinDonutsPage;
  let fixture: ComponentFixture<DunkinDonutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DunkinDonutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DunkinDonutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
