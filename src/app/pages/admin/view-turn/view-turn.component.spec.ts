import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTurnComponent } from './view-turn.component';

describe('ViewTurnComponent', () => {
  let component: ViewTurnComponent;
  let fixture: ComponentFixture<ViewTurnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTurnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
