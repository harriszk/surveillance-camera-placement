import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum UserActionType {
    DEFAULT = "DEFAULT",
    PLACE_POINT = "PLACE_POINT",
    ADD_CAMERA = "ADD_CAMERA",
    LOAD_MODEL = "LOAD_MODEL",
    TOGGLE_LOCK = "TOGGLE_LOCK",
}

interface ToolbarState {
    activeAction: UserActionType;
}

const initialState: ToolbarState = {
    activeAction: UserActionType.DEFAULT,
};

const toolbarSlice = createSlice({
    name: "toolbar",
    initialState: initialState,
    reducers: {
        setActiveAction(state, action: PayloadAction<UserActionType>) {
            if (state.activeAction === action.payload) {
                state.activeAction = UserActionType.DEFAULT;
            } else {
                state.activeAction = action.payload;
            }
        },
    },
});

export const selectActiveAction = (state: { toolbar: ToolbarState }) =>
    state.toolbar.activeAction;

export const { setActiveAction } = toolbarSlice.actions;

export default toolbarSlice.reducer;
