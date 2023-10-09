import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    // 'stopwatch'의 path일 경우 StopwatchComponent를 보여줘라
    path: 'stopwatch',
    component: StopwatchComponent,
  },
  {
    // 'stopwatch'의 path일 경우 StopwatchComponent를 보여줘라
    path: 'clock',
    component: ClockComponent,
  },
];

@NgModule({
  declarations: [SectionComponent, ClockComponent],
  imports: [RouterModule.forChild(routes), CommonModule, StopwatchModule],
  exports: [RouterModule, SectionComponent],
})
export class SectionModule {}
