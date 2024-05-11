import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    likedProducts: Object[]
}

const initialState: InitialState = {
    likedProducts: []
}

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        likeProduct: (state, action) => {
            localStorage.setItem("LikedProducts", JSON.stringify(state.likedProducts))
            state.likedProducts.push(action.payload)
        },
        SaveProduct: (state, action) => {
            localStorage.setItem("LikedProducts", JSON.stringify(state.likedProducts))
            state.likedProducts.push(action.payload)
        }
}
})

export default likeSlice.reducer;
export const {likeProduct} = likeSlice.actions;
