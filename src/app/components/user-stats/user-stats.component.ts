import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UserActivityStatsDto} from "../../dto/UserActivityStatsDto";
import {StatsService} from "../../service/stats/stats.service";

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnChanges{
  @Input() username: string = '';
  protected stats: UserActivityStatsDto[] = []; //TODO
  protected loading: boolean = false;

  constructor(private statsService: StatsService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && changes['username'].currentValue) {
      this.getStats();
    }
  }

  getStats() {
    this.loading = true;
    this.statsService.getStatsByUsername(this.username).subscribe(stats => {
        this.stats = stats;
      }, err => {
        this.loading = false;
      }
      , () => {
        this.loading = false;
      })
  }

}
