import { Sphere } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as THREE from "three";
import { addVertex } from "./sceneSlice";

const PointPlacer: React.FC = () => {
    const [hoveredPoint, setHoveredPoint] = useState<
        [number, number, number] | null
    >(null);
    const { camera, pointer } = useThree();
    const dispatch = useDispatch();

    useFrame(() => {
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(pointer, camera);
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // X-Z Plane at Y=0
        const intersection = new THREE.Vector3();

        if (raycaster.ray.intersectPlane(plane, intersection)) {
            setHoveredPoint(intersection.toArray());
        }
    });

    return (
        hoveredPoint && (
            <Sphere
                key={"hovered-point"}
                args={[0.035]}
                position={hoveredPoint}
                onClick={() => {
                    console.log(`Hovered point was clicked!`);
                    dispatch(
                        addVertex({
                            key: "",
                            position: hoveredPoint,
                            color: "#A1C3FF",
                        }),
                    );
                    // dispatch(toggleVertexColor(point.key));
                }}
            >
                <meshBasicMaterial color="blue" />
            </Sphere>
        )
    );
};

export default PointPlacer;
