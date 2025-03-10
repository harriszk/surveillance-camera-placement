import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type Colors = "#B0B0B0" | "#A1C3FF";

type VertexData = {
    key: string;
    position: [number, number, number];
    color: Colors;
};

interface SceneState {
    vertices: VertexData[];
}

// const unitCube: VertexData[] = [
//     {
//         position: [-0.5, -0.5, -0.5],
//         color: "#A1C3FF",
//         key: "",
//     },
//     {
//         position: [0.5, -0.5, -0.5],
//         color: "#B0B0B0",
//         key: "",
//     },
//     {
//         position: [-0.5, 0.5, -0.5],
//         color: "#A1C3FF",
//         key: "",
//     },
//     {
//         position: [0.5, 0.5, -0.5],
//         color: "#B0B0B0",
//         key: "",
//     },
//     {
//         position: [-0.5, -0.5, 0.5],
//         color: "#A1C3FF",
//         key: "",
//     },
//     {
//         position: [0.5, -0.5, 0.5],
//         color: "#B0B0B0",
//         key: "",
//     },
//     {
//         position: [-0.5, 0.5, 0.5],
//         color: "#A1C3FF",
//         key: "",
//     },
//     {
//         position: [0.5, 0.5, 0.5],
//         color: "#B0B0B0",
//         key: "",
//     },
// ];

const initialState: SceneState = {
    vertices: [
        {
            key: "origin",
            position: [0, 0, 0],
            color: "#B0B0B0",
        },
        {
            key: "x",
            position: [1, 0, 0],
            color: "#B0B0B0",
        },
        {
            key: "y",
            position: [0, 1, 0],
            color: "#B0B0B0",
        },
        {
            key: "z",
            position: [0, 0, 1],
            color: "#B0B0B0",
        },
    ],
};

const sceneSlice = createSlice({
    name: "scene",
    initialState,
    reducers: {
        toggleVertexColor(state, payload: PayloadAction<string>) {
            const vertex = state.vertices.find(
                (v) => v.key === payload.payload,
            );

            if (vertex) {
                const colorOrder: Colors[] = ["#A1C3FF", "#B0B0B0"];
                const currentIndex = colorOrder.indexOf(vertex.color);
                vertex.color =
                    colorOrder[(currentIndex + 1) % colorOrder.length];
            }
        },
        addVertex(state, payload: PayloadAction<VertexData>) {
            payload.payload.key = uuidv4();
            state.vertices.push(payload.payload);
        },
    },
});

export const selectVertices = (state: { scene: SceneState }) =>
    state.scene.vertices;

export const { toggleVertexColor, addVertex } = sceneSlice.actions;

export default sceneSlice.reducer;
