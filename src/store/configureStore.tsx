import {combineReducers, createStore} from 'redux';
import musicReducer from './slices/musicSclice';
import storage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import loadingReducer from './slices/loadingSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({music: musicReducer, loading: loadingReducer}),
);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
