import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import ScrollToTop from './app/common/util/ScrollToTop'
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import ConfigureStore from './app/store/configureStore';

const store = ConfigureStore();

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </BrowserRouter> 
        </Provider>,
        rootEl
    )
}

if(module.hot){
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();
registerServiceWorker();
