import { configureStore } from '@reduxjs/toolkit';

import filterReducer from '../features/filter/FilterSlice';
import dataReqReducer from '../features/filter/DataReducer';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    data:dataReqReducer
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;