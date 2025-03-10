import { configureStore } from "@reduxjs/toolkit";
import camerasReducer from "../features/cameras/cameraSlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        cameras: camerasReducer,
    }
})

export default store;