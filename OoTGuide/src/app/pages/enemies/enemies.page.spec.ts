import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnemiesPage } from './enemies.page';

describe('EnemiesPage', () => {
  let component: EnemiesPage;
  let fixture: ComponentFixture<EnemiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnemiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
