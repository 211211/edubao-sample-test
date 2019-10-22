import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import EntriesStore from './Stores/EntriesStore';
import ViewStore from './Stores/ViewStore';
import EntriesContainer from './Containers/EntriesContainer';

const initialState = window.initialState && JSON.parse(window.initialState) || {};

var entriesStore = EntriesStore.fromJS(initialState.entries || []);
var viewStore = new ViewStore();

ReactDOM.render(
  <EntriesContainer entriesStore={entriesStore} viewStore={viewStore} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Containers/EntriesContainer', () => {
    var NewEntriesContainer = require('./Containers/EntriesContainer').default;
    ReactDOM.render(
      <NewEntriesContainer entriesStore={entriesStore} viewStore={viewStore} />,
      document.getElementById('root')
    );
  });
}
