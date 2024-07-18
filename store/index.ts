import { configureStore } from "@reduxjs/toolkit";
import Deatils from "@/store/apps/deatils";

export const store = configureStore({
    reducer: {
      Deatils   
     },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;