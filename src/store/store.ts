import {configureStore} from '@reduxjs/toolkit'
import {watchTvApi} from "./services/watchTvService";

export const store = configureStore({
    reducer: {
        [watchTvApi.reducerPath]: watchTvApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(watchTvApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch