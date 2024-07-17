import { configureStore } from "@reduxjs/toolkit";
// import Contact from "@/store/apps/contact";

export const store = configureStore({
    reducer: {
        // Contact
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;