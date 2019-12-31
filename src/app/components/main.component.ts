import { AppInjector } from '../app-injector';
import { Component, OnInit } from '@angular/core';
import { Store } from '../store/store.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() {
    AppInjector.get(Store)
      .getInstance()
      .dispatch({ type: 'BOOTSTRAP' });
  }

  ngOnInit() {}
}
