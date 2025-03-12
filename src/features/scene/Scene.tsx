import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { JSX } from "react";
import { Sphere } from "@react-three/drei";
import {
    selectCameraLock,
    selectVertices,
    toggleVertexColor,
} from "./sceneSlice";
import PointPlacementTool from "./PointPlacementTool";
import { selectActiveAction, UserActionType } from "../toolbar/toolbarSlice";
import Debugger from "./Debugger";

const Scene: React.FC = () => {
    const dispatch = useDispatch();
    const lockControls = useSelector(selectCameraLock);
    const vertices = useSelector(selectVertices);
    const activeAction = useSelector(selectActiveAction);

    const userActionSceneComponents: Partial<
        Record<UserActionType, JSX.Element>
    > = {
        [UserActionType.PLACE_POINT]: <PointPlacementTool />,
    };

    return (
        <div className="relative w-full h-full">
            <Debugger />
            <Canvas
                orthographic={true}
                camera={{
                    position: [1, 1, 3],
                    zoom: 220,
                }}
            >
                <color attach="background" args={["#F5F5F5"]} />
                {!lockControls && (
                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        enableRotate={true}
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
