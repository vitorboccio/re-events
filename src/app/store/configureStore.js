import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer/rootReducer'

const ConfigureStore = (preLoadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preLoadedState,
        composedEnhancer
    );

    if(process.env.NODE_ENV !== 'production') {
        if(module.hot) {
            module.hot.accept('../reducer/rootReducer', () => {
                const newRootReducer = require('../reducer/rootReducer').default();
                store.replaceReducer(newRootReducer);
            })
        }
    }

    return store
}

export default ConfigureStore