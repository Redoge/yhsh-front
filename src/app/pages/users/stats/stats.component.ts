import { Component } from '@angular/core';
import {UserActivityStatsDto} from "../../../dto/UserActivityStatsDto";
import {StatsService} from "../../../service/stats/stats.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  protected stats: UserActivityStatsDto[] = []; //TODO
  protected loading: boolean = false;

  constructor(private statsService: StatsService, private titleService: Title) {
    this.titleService.setTitle("Stats");
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
