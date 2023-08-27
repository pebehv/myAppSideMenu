import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitiesPPage } from './cities-p.page';

describe('CitiesPPage', () => {
  let component: CitiesPPage;
  let fixture: ComponentFixture<CitiesPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitiesPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
