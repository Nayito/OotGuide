import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BossesPage } from './bosses.page';

describe('BossesPage', () => {
  let component: BossesPage;
  let fixture: ComponentFixture<BossesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BossesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
