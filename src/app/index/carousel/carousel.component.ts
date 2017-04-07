import {Component, OnInit} from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-index-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  currentPage = 0;
  constructor() {
    setInterval(() => {
      const id = (this.currentPage + 1) % 4;
      this.currentPage = id;
    }, 3000);
  }

  changebanner(id: number) {
    this.currentPage = id;
  }

  left() {
    if (this.currentPage !== 0) {
      const id = (this.currentPage - 1) % 4;
      this.currentPage = id;
    }else {
      this.currentPage = 3;
    }
  }

  right() {
    const id = (this.currentPage + 1) % 4;
    this.currentPage = id;
  }

  ngOnInit() {
  }
}
