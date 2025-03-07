import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Box: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="green" />
        </mesh>
    );
};

export default Box;
