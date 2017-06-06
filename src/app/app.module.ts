import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicModalsComponent } from './pages/basic-modals/basic-modals.component';
import { ModalBasicComponent } from './common/modal/modal-basic/modal-basic.component';
import { ModalContentComponent } from './common/modal/modal-content/modal-content.component';
import { ContentModalsComponent } from './pages/content-modals/content-modals.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicModalsComponent,
    ModalBasicComponent,
    ModalContentComponent,
    ContentModalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
