import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlestickChartComponent } from './candlestick-chart.component';

describe('ChartComponent', () => {
  let component: CandlestickChartComponent;
  let fixture: ComponentFixture<CandlestickChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandlestickChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlestickChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
