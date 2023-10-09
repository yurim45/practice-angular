import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TimeDisplayComponent, ButtonsComponent, StopwatchComponent],
  imports: [RouterModule, CommonModule],
  exports: [StopwatchComponent],
})
export class StopwatchModule {}
