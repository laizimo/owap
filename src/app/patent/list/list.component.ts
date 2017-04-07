import {Component , OnInit} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-patent-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PatentListComponent implements OnInit {
  ngOnInit() {
    $('.patent-cover').mouseover(function(){
      const desc = $(this).find('div');
      desc.css('z-index', 0 );
    });

    $('.patent-cover').mouseleave(function(){
      const desc = $(this).find('div');
      desc.css('z-index', -1 );
    });
  }
}
