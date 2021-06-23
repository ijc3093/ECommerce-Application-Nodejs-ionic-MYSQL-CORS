import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyContactsPage } from './key-contacts.page';

describe('KeyContactsPage', () => {
  let component: KeyContactsPage;
  let fixture: ComponentFixture<KeyContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
