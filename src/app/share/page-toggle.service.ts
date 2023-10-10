import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//  @Injectable 데코레이터는 앵귤러에서 service를 사용하도록 해준다
@Injectable()
export class PageToggleService {
  routingCount = 0;

  constructor(private router: Router) {}

  goPage(target: string) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
