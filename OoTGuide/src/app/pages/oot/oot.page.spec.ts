import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OotPage } from './oot.page';

describe('OotPage', () => {
  let component: OotPage;
  let fixture: ComponentFixture<OotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
