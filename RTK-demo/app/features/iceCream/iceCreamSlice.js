const createSlice = require("@reduxjs/toolkit").createSlice
const cakeActions = require("../cake/cakeSlice").cakeActions

const initialState = {
    numberOfIcecream:20
}

const iceCreamSlice = createSlice(
    {
        name: "iceCream",
        initialState,
        reducers:{
            ordered: (state) => {
                state.numberOfIcecream--
            },
            restocked: (state, action) => {
                state.numberOfIcecream += action.payload
            }
        },
        extraReducers:(builder) => {
            builder.addCase(cakeActions.ordered,(state) => {
                state.numberOfIcecream--
            })
        }
    }
)

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions