import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js/auto'

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent  implements  OnInit {

  public chart: any;
  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  constructor() {

  }
  public ngOnInit(){
       this.createChart();
  }

  createChart(){

    this.chart = new Chart(
      "MyChart",
        {
      type: 'bar', //this denotes tha type of chart

      data: {
        labels: this.data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: this.data.map(row => row.count)
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
    Chart.defaults.color = '#fff';
    Chart.defaults.backgroundColor = '#9BD0F5';
  }
}
