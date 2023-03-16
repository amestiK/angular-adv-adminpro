import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public strings1: string[] = [ 'Pan', 'Refresco', 'Tacos' ];

  public data1 = {
    labels: this.strings1,
    datasets: [
      { data: [ 350, 450, 600 ],
      backgroundColor: ['#9e1203','#FF5800', '#FFB414']
      },

    ]
  };
}
