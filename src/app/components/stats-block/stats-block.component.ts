import {Component, Input} from '@angular/core';
import {UserActivityStatsDto} from "../../dto/UserActivityStatsDto";

@Component({
  selector: 'app-stats-block',
  templateUrl: './stats-block.component.html',
  styleUrls: ['./stats-block.component.css']
})
export class StatsBlockComponent {
     @Input() stat: UserActivityStatsDto|null = null
}
