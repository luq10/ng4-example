import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ModalContentComponent } from '../../common/modal/modal-content/modal-content.component';

@Component({
  selector: 'app-content-modals',
  templateUrl: './content-modals.component.html'
})
export class ContentModalsComponent implements OnInit, AfterViewInit {
  @ViewChild('basic') basic: ModalContentComponent;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // For example:
    //
    // this.basic.open();
  }
}
