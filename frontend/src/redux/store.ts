import { configureStore } from '@reduxjs/toolkit';
import switchtext from './slices/swithTextData';
// ...

export const store = configureStore({
  reducer: {
    switchtext,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
