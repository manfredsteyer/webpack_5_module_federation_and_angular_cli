import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-demo',
  templateUrl: './demo.component.html',
  // HACK: styleUrls do currently not work
  // styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
