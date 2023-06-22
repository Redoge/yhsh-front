import { Component } from '@angular/core';
import {UserActivityStatsDto} from "../../../dto/UserActivityStatsDto";
import {StatsService} from "../../../service/stats/stats.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  protected stats: UserActivityStatsDto[] = []; //TODO
  protected loading: boolean = false;

  constructor(private statsService: StatsService) {
    this.loading = true;
    this.statsService.getStats().subscribe(stats => {
      this.stats = stats;
    }, err => {
        this.loading = false;
      }
    , ()=>{
      this.loading = false;
      })

}
}
