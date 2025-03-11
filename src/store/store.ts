import { configureStore } from "@reduxjs/toolkit";
import camerasReducer from "../features/scene/cameras/cameraSlice";
import sceneReducer from "../features/scene/sceneSlice";
import toolbarReducer from "../features/toolbar/toolbarSlice";

const store = configureStore({
    reducer: {
        toolbar: toolbarReducer,
        scene: sceneReducer,
        cameras: camerasReducer,
    },
});

export default store;
