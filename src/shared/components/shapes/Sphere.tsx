import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Sphere: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            // meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} rotation={[0, 0, 1]}>
            <sphereGeometry args={[2, 15, 26]} />
            <meshStandardMaterial color="green" wireframe={true} />
        </mesh>
    );
};

export default Sphere;
