import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice"
import userReducer from "../features/user/userslice"
import iceCreamReducer from "../features/iceCream/iceCreamSlice"










const store = configureStore(
    {
       reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        users: userReducer,
       },
    //    middleware:(DefaultMiddleWare) => DefaultMiddleWare().concat(logger)
    }
)

export default store

