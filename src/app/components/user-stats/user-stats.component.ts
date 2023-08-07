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
  protected todayDate;
  protected startDate: Date|undefined;
  protected endDate: Date|undefined;

  constructor(private statsService: StatsService) {
    this.todayDate = new Date().toISOString().split("T")[0];
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

  filter(){
    this.loading = true;
    this.statsService.getStatsByUsernameAndFilter(this.username, this.startDate, this.endDate).subscribe(stats => {
        this.stats = stats;
      }, err => {
        this.loading = false;
      }
      , () => {
        this.loading = false;
      })
  }
}
