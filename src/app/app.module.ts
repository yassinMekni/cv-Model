import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvComponent } from './cvSI/cv/cv.component';
import { ListComponent } from './cvSI/list/list.component';
import { ItemCVComponent } from './cvSI/item-cv/item-cv.component';
import { DetailComponent } from './cvSI/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    ItemCVComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
