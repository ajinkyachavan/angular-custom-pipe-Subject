import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DinoService } from './dino.service';
import { FilterQueryPipe } from './filter-query.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, FilterQueryPipe],
  bootstrap: [AppComponent],
  providers: [DinoService]
})
export class AppModule { }
