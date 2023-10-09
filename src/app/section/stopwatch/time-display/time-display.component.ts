import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  // 부모 컴포넌트로부터 데이터를 받기 위해 @Input 데코레이터를 사용
  // 부모 컴포넌트로부터 inputData이름으로 전달된 데이터를 받는다
  @Input() inputData: string = '';

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: any;

  constructor() {}

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  ngOnChanges(changes: any) {
    // 부모 컴포넌트로 보낸 데이터를 아는 시점
    // ngOnChanges 메서느는 컴포넌트이기 때문에(@Component 데코레이터를 사용했기 때문에) 사용할 수 있는 메서드

    // 전달된 값에 변화가 없으면 console은 찍히지 않는다
    // console.log('inputData 변화 감지', changes);

    for (let propName in changes) {
      if (changes[propName].currentValue === 'start') {
        this.timeStart();
      }
      if (changes[propName].currentValue === 'stop') {
        this.timeStop();
      }
      if (changes[propName].currentValue === 'reset') {
        this.timeReset();
      }
    }
  }

  ngOnInit() {}
}
