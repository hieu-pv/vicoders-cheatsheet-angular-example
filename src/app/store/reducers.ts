import * as _ from 'lodash';
import { combineReducers } from 'redux';

let defaultState = { initValue: 'NF' };

if (!_.isNil(localStorage.getItem('State'))) {
  const loadState = state => {
    try {
      const serializedState = localStorage.getItem(state);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  defaultState = _.assign(loadState('State'), { is_restored: true });
}

const App = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE':
      return _.assign({}, state, { initValue: action.data });
    default:
      return state;
  }
};

export default combineReducers({ App });
