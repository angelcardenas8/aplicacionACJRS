import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRecetaPage } from './add-receta.page';

describe('AddRecetaPage', () => {
  let component: AddRecetaPage;
  let fixture: ComponentFixture<AddRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
