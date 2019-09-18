import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/reducer'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
