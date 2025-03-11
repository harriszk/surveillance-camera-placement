import * as Three from "three";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Camera {
    id: string;
    name: string;
    position: Three.Vector3;
    direction: Three.Vector3;
    right: Three.Vector3;
    up: Three.Vector3;
    fov?: number;
    active?: boolean;
}

interface CamerasState {
    cameras: Camera[];
}

const initialState: CamerasState = {
    cameras: [],
};

const camerasSlice = createSlice({
    name: "cameras",
    initialState,
    reducers: {
        addCamera(state, action: PayloadAction<Camera>) {
            state.cameras.push(action.payload);
        },
        removeCamera(state, action: PayloadAction<string>) {
            state.cameras = state.cameras.filter(
                (camera) => camera.id !== action.payload,
            );
        },
    },
});

export default camerasSlice.reducer;
