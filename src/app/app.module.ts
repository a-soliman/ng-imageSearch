import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { HttpModule } from '@angular/http';


import { ImageService } from './shared/image.service';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ ImageService, HttpModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
