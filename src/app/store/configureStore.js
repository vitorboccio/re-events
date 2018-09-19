import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducer/rootReducer'

const ConfigureStore = (preLoadedState) => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    const composedEnhancer = compose(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preLoadedState,
        composedEnhancer
    );

    return store
}

export default ConfigureStore