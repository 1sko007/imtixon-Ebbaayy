import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    saveProduct: Object[]
}

const initialState: InitialState = {
    saveProduct: []
}

const save = createSlice({
    name: "save",
    initialState,
    reducers: {
        SaveProduct: (state, action) => {
            localStorage.setItem("saveProduct", JSON.stringify(state.saveProduct))
            state.saveProduct.push(action.payload)
        }
}
})

export default save.reducer;
export const {SaveProduct} = save.actions;