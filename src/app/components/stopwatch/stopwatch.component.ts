import {AfterViewInit, Component, OnInit} from '@angular/core';
import {timestamp} from "rxjs";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  public seconds: number = 0;
  private interval: number = 0;
  protected isRunning: boolean = false;
  protected isExpanded = false;


  ngOnInit() {
  }

  start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  stop() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  reset() {
    this.seconds = 0;
    this.stop()
  }

}
