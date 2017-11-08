import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { ImageService } from './shared/image.service';


@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ ImageService, HttpModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
