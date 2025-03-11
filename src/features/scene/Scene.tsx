import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    OrbitControlsChangeEvent,
    Plane,
} from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { JSX, useState } from "react";
import { Sphere } from "@react-three/drei";
import {
    selectCameraLock,
    selectVertices,
    toggleVertexColor,
} from "./sceneSlice";
import PointPlacementTool from "./PointPlacementTool";
import { selectActiveAction, UserActionType } from "../toolbar/toolbarSlice";

type DebugInfo = {
    position: { x: number; y: number; z: number };
    zoom: number;
};

const Scene: React.FC = () => {
    const dispatch = useDispatch();
    const lock = useSelector(selectCameraLock);
    const vertices = useSelector(selectVertices);
    const activeAction = useSelector(selectActiveAction);
    const [debugMode, setDebugMode] = useState<boolean>(false);
    const [debugInfo, setDebugInfo] = useState<DebugInfo>({
        position: {
            x: 1,
            y: 1,
            z: 3,
        },
        zoom: 220,
    });

    const userActionSceneComponents: Partial<
        Record<UserActionType, JSX.Element>
    > = {
        [UserActionType.PLACE_POINT]: <PointPlacementTool />,
    };

    return (
        <div className="relative w-full h-full">
            <div className="absolute top-3 right-3 z-50 flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                    <label htmlFor="debug">Debug</label>
                    <input
                        className="w-6 h-6 bg-white appearance-none border-2 rounded-sm border-gray-500 checked:bg-sky-300 checked:border-sky-500"
                        id="debug"
                        type="checkbox"
                        name="debug"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setDebugMode(e.target.checked);
                        }}
                    />
                </div>
                {debugMode && (
                    <div className="p-2 border border-gray-400 bg-gray-100 rounded">
                        <p>Debug Menu</p>
                        <div>
                            <p>Camera Position:</p>
                            <p>X: {debugInfo.position.x.toFixed(2)}</p>
                            <p>Y: {debugInfo.position.y.toFixed(2)}</p>
                            <p>Z: {debugInfo.position.z.toFixed(2)}</p>
                            <p>Zoom: {debugInfo.zoom.toFixed(2)}</p>
                        </div>
                    </div>
                )}
            </div>

            <Canvas
                orthographic
                dpr={[1, 2]}
                gl={{ alpha: false }}
                camera={{
                    position: [
                        debugInfo.position.x,
                        debugInfo.position.y,
                        debugInfo.position.z,
                    ],
                    zoom: debugInfo.zoom,
                }}
            >
                <color attach="background" args={["#F5F5F5"]} />
                {!lock && (
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        onChange={(e: OrbitControlsChangeEvent | undefined) => {
                            if (!e || !debugMode) {
                                return;
                            }

                            setDebugInfo({
                                position: e.target.object.position,
                                zoom: e.target.object.zoom,
                            });
                        }}
                    />
                )}

                {userActionSceneComponents[activeAction]}

                {vertices.map((vertex) => {
                    return (
                        <Sphere
                            key={vertex.key}
                            args={[0.035]}
                            position={vertex.position}
                            onClick={() => {
                                dispatch(toggleVertexColor(vertex.key));
                            }}
                        >
                            <meshBasicMaterial color={vertex.color} />
                        </Sphere>
                    );
                })}

                <Plane
                    visible={true}
                    rotation={[Math.PI / 2, 0, 0]}
                    args={[5, 5]}
                >
                    <meshBasicMaterial side={2} />
                </Plane>
            </Canvas>
        </div>
    );
};

export default Scene;
