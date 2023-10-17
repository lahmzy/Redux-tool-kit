const configureStore = require("@reduxjs/toolkit").configureStore
const cakeReducer = require("../app/features/cake/cakeSlice")
const reduxLogger = require("redux-logger")
const userReducer = require("../app/features/user/userslice")


const logger = reduxLogger.createLogger()

const iceCreamReducer = require("../app/features/iceCream/iceCreamSlice")


const store = configureStore(
    {
       reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
       },
       middleware:(DefaultMiddleWare) => DefaultMiddleWare().concat(logger)
    }
)

module.exports = store

