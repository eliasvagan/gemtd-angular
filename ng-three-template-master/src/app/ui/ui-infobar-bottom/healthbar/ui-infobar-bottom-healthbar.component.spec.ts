import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInfobarBottomHealthbarComponent } from './ui-infobar-bottom-healthbar.component';

describe('UiInfobarBottomHealthbarComponent', () => {
  let component: UiInfobarBottomHealthbarComponent;
  let fixture: ComponentFixture<UiInfobarBottomHealthbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiInfobarBottomHealthbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInfobarBottomHealthbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
