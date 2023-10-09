import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  present = '';

  startTime($event: string) {
    this.present = $event;
    console.log('section에서 잘 받았다', $event);
  }
}
