import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// @Injectable 데코레이터는 앵귤러에서 service를 사용하도록 해준다
// service는 providers에 등록해야 사용할 수 있다. 등록하는 방법은 3가지가 있음
//   1. 모듈에 등록
//      - 사용하고 있는 컴포넌트에서 사용
//      - 없다면 import 된 컴포넌트로 찾아가 있다면 사용
//   2. 컴포넌트 데코레이션에 등록
//      - 해당 컴포넌트와 자식 컴포넌트에서 사용할 수 있음(트리 구조)
//      - 대이터 공유가 가능
//   3. @Injectable 데코레이션에 provideIn으로 등록

// angular의 injector 검색 순서
//  ✣ 가장 먼저 만나는 providers 에 등록된 service를 사용
//   자신의 컴포넌트
//    → 부모 컴포넌트
//    → 루트 컴포넌트까지 계속 부모-자식 관계를 타고 올라감
//    → 루트 모듈
//    → 하위 모듈
//    → 자신이 속한 모듈까지 게속 내려옴
//    → 도중에 해당 서비스에 대한 providers 값이 있다면 검색 종료

@Injectable({
  providedIn: 'root',
})
export class PageToggleService {
  routingCount = 0;

  constructor(private router: Router) {}

  goPage(target: string) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
