import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  // 자식 컴포넌트가 부모 컴포넌트에 전달하기 위해 @Output 데코레이터를 사용
  // clickEvent라는 이름의 이벤트 리스터를 만든 것
  // 부모 컴포넌트에서 clickEvent 이름으로 잔달한 메소드(startTime())를 실행
  @Output() clickEvent = new EventEmitter();
  constructor() {}

  executeButton(command: string) {
    // 부모 컴포넌트에서 clickEvent 이름으로 잔달한 메소드를 실행
    this.clickEvent.emit(command);
  }

  ngOnInit() {}
}
