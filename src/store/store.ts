import { configureStore } from "@reduxjs/toolkit";
import camerasReducer from "../features/cameras/cameraSlice";
import uiReducer from "../features/ui/uiSlice";
import sceneReducer from "../features/scene/sceneSlice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        cameras: camerasReducer,
        scene: sceneReducer,
    },
});

export default store;
