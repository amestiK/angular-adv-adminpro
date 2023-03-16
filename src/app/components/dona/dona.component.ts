import { Component, Input } from '@angular/core';

import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = "Sin titulo"

  @Input('strings') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
      backgroundColor: ['#9e1203','#FF5800', '#FFB414']
      },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
