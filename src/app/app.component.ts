import { DINO } from './dino_facts';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DinoService } from './dino.service';
import { pluck, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { Dino } from './dino.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`h1 { font-family: Lato; }`]
})
export class AppComponent implements OnInit {

  dinoArray: Dino[];
  @ViewChild('searchInput') public input: ElementRef;

  constructor() { }

  ngOnInit() {
    this.dinoArray = DINO;

    let inputText$ = fromEvent(this.input.nativeElement, 'keyup');

    inputText$.pipe(
      pluck('key'),
      debounceTime(400)
    ).subscribe()

  }

}
