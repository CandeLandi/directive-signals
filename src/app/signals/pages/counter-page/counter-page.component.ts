import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss'
})
export class CounterPageComponent {


  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter())

  incraseBy(value: number) {
    this.counter.update(current => current + value)
    /* this.counter.set(this.counter() + value) */
  }



}
