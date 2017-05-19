import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

import { createStore, applyMiddleware, combineReducers} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...loggerMiddleware)
//   ));
const result = applyMiddleware(loggerMiddleware, thunkMiddleware);
const combined = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

export default createStore(combined, result)
