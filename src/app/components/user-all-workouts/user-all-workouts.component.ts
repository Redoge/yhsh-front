import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {WorkoutService} from "../../service/workout/workout.service";
import {Workout} from "../../dto/Workout";
import {Page} from "../../dto/Page";
import {PaginationService} from "../../service/pagination/pagination.service";

@Component({
  selector: 'app-user-all-workouts',
  templateUrl: './user-all-workouts.component.html',
  styleUrls: ['./user-all-workouts.component.css']
})
export class UserAllWorkoutsComponent implements OnChanges{
  @Input() username: string = '';
  protected workouts: Workout[] | undefined;
  protected loading = false;
  private activePage = 0;
  protected page: Page<any>|undefined;
  constructor(private workoutService: WorkoutService, private paginationService: PaginationService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['username'] && changes['username'].currentValue) {
      this.paginationService.activePage$.subscribe(res=>{
        this.activePage = res;
        this.updateAllWorkoutByUserUsername()
      });
    }
  }


  private updateAllWorkoutByUserUsername() {
    this.loading = true;
    this.workoutService.getAllWorkoutsByUsername(this.username, this.activePage-1).subscribe((response) => {
      this.page = response
      this.workouts = response.content;
      this.loading = false;
    }, ()=>{
      this.loading = false;
    });
  }

}
