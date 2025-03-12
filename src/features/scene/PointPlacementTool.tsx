import { Sphere } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import * as THREE from "three";
import { addVertex } from "./sceneSlice";

const PointPlacementTool: React.FC = () => {
    const dispatch = useDispatch();
    const { camera, pointer } = useThree();

    const sphereRef = useRef<THREE.Mesh>(null);
    const hoveredPointRef = useRef<[number, number, number] | null>(null);
    const raycaster = useRef(new THREE.Raycaster());
    const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
    const intersection = new THREE.Vector3();

    useFrame(() => {
        raycaster.current.setFromCamera(pointer, camera);
        if (raycaster.current.ray.intersectPlane(plane.current, intersection)) {
            hoveredPointRef.current = intersection.toArray();
            if (sphereRef.current) {
                sphereRef.current.position.set(...hoveredPointRef.current);
            }
        }
    });

    const handleClick = () => {
        if (!hoveredPointRef.current) {
            return;
        }

        dispatch(
            addVertex({
                key: "",
                position: hoveredPointRef.current,
                color: "#A1C3FF",
            }),
        );
    };

    return (
        <Sphere ref={sphereRef} args={[0.035]} onClick={handleClick}>
            <meshBasicMaterial color="blue" />
        </Sphere>
    );
};

export default PointPlacementTool;
