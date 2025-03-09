import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface UIState {
    theme: Theme;
    lockCamera: boolean;
}

const initialState: UIState = {
    theme: "light",
    lockCamera: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        toggleLockCamera(state) {
            state.lockCamera = !state.lockCamera;
        }
    }
})

export const selectTheme = (state: { ui: UIState }) => state.ui.theme;
export const selectCameraLock = (state: { ui: UIState }) => state.ui.lockCamera;

export const { toggleTheme, toggleLockCamera } = uiSlice.actions;

export default uiSlice.reducer;