import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrbitControlsChangeEvent } from "@react-three/drei";
import { selectCameraLock } from "../ui/uiSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

type DebugInfo = {
    position: { x: number; y: number; z: number };
    zoom: number;
};

const Scene: React.FC = () => {
    const lock = useSelector(selectCameraLock);
    const [debugMode, setDebugMode] = useState<boolean>(false);
    const [debugInfo, setDebugInfo] = useState<DebugInfo>({
        position: {
            x: 1,
            y: 1,
            z: 3,
        },
        zoom: 220,
    });

    return (
        <div className="relative w-full h-full">
            <div className="absolute top-3 right-3 z-50 flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                    <label htmlFor="debug">Debug</label>
                    <input
                        className="w-5 h-5 bg-white appearance-none border-2 rounded-sm border-gray-500 checked:bg-red-300 checked:border-red-500"
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
                {!lock && (
                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
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
                <color attach="background" args={["#f6d186"]} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" wireframe={true} />
                </mesh>
            </Canvas>
        </div>
    );
};

export default Scene;
