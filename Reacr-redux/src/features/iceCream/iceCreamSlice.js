import { createSlice } from "@reduxjs/toolkit"

import { ordered as CakeOrdered } from "../cake/cakeSlice"

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
            builder.addCase(CakeOrdered,(state) => {
                state.numberOfIcecream--
            })
        }
    }
)

export default iceCreamSlice.reducer
export const {ordered,restocked} = iceCreamSlice.actions