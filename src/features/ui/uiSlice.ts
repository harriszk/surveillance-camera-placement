import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface UIState {
    theme: Theme;
    lockCamera: boolean;
    activeAction: string;
}

const initialState: UIState = {
    theme: "light",
    lockCamera: false,
    activeAction: "Default",
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
        toggleLockCamera(state) {
            state.lockCamera = !state.lockCamera;
        },
        setActiveAction(state, payload: PayloadAction<string>) {
            if (state.activeAction === payload.payload) {
                state.activeAction = "Default";
            } else {
                state.activeAction = payload.payload;
            }
        },
    },
});

export const selectTheme = (state: { ui: UIState }) => state.ui.theme;
export const selectCameraLock = (state: { ui: UIState }) => state.ui.lockCamera;
export const selectActiveAction = (state: { ui: UIState }) =>
    state.ui.activeAction;

export const { toggleTheme, toggleLockCamera, setActiveAction } =
    uiSlice.actions;

export default uiSlice.reducer;
