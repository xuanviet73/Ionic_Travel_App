import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTourPage } from './detail-tour.page';

describe('DetailTourPage', () => {
  let component: DetailTourPage;
  let fixture: ComponentFixture<DetailTourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
