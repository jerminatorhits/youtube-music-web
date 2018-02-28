import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import musicApp from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(musicApp);

render(<Provider store={store}>
			   <App />
			 </Provider>, document.getElementById('root'));
registerServiceWorker();
