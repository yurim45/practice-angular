import { PageToggleService } from './../../share/page-toggle.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  present = '';

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) {}

  startTime($event: string) {
    this.present = $event;
    console.log('section에서 잘 받았다', $event);
  }

  goClock() {
    this.pageToggleService.goPage('/clock');
    // this.router.navigateByUrl('/clock');
  }
}
