import {Component, Input, OnChanges,  SimpleChanges} from '@angular/core';
import {UserWeight} from "../../dto/UserWeight";

@Component({
  selector: 'app-weight-graph',
  templateUrl: './weight-graph.component.html',
  styleUrls: ['./weight-graph.component.css']
})
export class WeightGraphComponent implements OnChanges{
  @Input() weight_list: UserWeight[] = [];
  chart: any;
  chartOptions: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['weight_list'] && changes['weight_list'].currentValue) {
       this.weight_list = changes['weight_list'].currentValue
       this.updateGraph()
    }
  }
  private updateGraph() {
    this.chartOptions = {
      theme: "dark2",
      animationEnabled: true,
      zoomEnabled: true,
      data: [{
        type: "line",
        xValueFormatString: "DD-MMM-YYYY",
        yValueFormatString: "###.## kg",
        dataPoints: this.mapWeightListToDataPoints()
      }],
      backgroundColor: "rgba(0, 0, 0, 0)",
    }
  }


  private mapWeightListToDataPoints():any{
    console.log(this.weight_list)
    return  this.weight_list.map(w=>{
      return {
        x: new Date(w.date),
        y: w.weight
      }
    })
  }
}
