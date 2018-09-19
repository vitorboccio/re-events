import { createStore, applyMiddleware, compose } from 'redux'

export const ConfigureStore = (preLoadedState) => {
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