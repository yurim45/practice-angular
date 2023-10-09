import { SectionModule } from './section/section.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

// angualr는 최소 하나의 모듈을 가져야 한다. 그 모듈이 root module
// root module은 가장 처음 실행되는 모듈이고
// 보통 app.module이 root module이 된다

// 하나의 모듈을 두 개의 컴포넌트에 등록할 수 없다

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
