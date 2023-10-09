import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  present = '';

  startTime($event: string) {
    this.present = $event;
    console.log('section에서 잘 받았다', $event);
  }
}
