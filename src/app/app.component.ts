import { Component, OnInit } from '@angular/core';
import { Store } from './store/store.module';
import initSubscriber from 'redux-subscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public store;
  unsubscribe: any;
  constructor(store: Store) {
    this.store = store.getInstance();
  }

  ngOnInit(): void {
    const saveState = state => {
      try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('State', serializedState);
      } catch {}
    };
    const subscribe = initSubscriber(this.store);

    // Listen on change of state
    const StateToListen = 'App';
    this.unsubscribe = subscribe(StateToListen, state => {
      saveState(state.App);
    });
  }

  change() {
    this.store.dispatch({ type: 'CHANGE', data: 'new value' });
  }

  reset() {
    localStorage.removeItem('State');
    console.log('localStorate is cleared');
  }
}
