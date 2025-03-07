import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface UIState {
    theme: Theme;
}

const initialState: UIState = {
    theme: "light"
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
    }
})

export default uiSlice.reducer;