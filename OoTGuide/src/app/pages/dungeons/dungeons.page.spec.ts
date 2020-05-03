import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DungeonsPage } from './dungeons.page';

describe('DungeonsPage', () => {
  let component: DungeonsPage;
  let fixture: ComponentFixture<DungeonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DungeonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
