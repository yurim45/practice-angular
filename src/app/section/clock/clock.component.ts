import { PageToggleService } from './../../share/page-toggle.service';
import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  // currentTime: string = moment().format('YYYY-MM-DD HH:mm:ss');
  timeString: string = '';

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {
    interval(1000)
      .pipe(
        map(() => {
          return moment().format('YYYY-MM-DD HH:mm:ss');
        })
      )
      .subscribe((data: any) => {
        this.timeString = data;
      });
  }

  goStopwatch() {
    this.pageToggleService.goPage('/stopwatch');
    // this.router.navigateByUrl('/stopwatch');
  }

  // getCurrentTime() {
  // this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  // 컴포넌트에 변화가 있을때마다 메소드는 새로 불려지기 때문에
  // 메서드를 컴포넌트에 직접 바인딩하는 것은 피한다
  // return result;
  // }
}
