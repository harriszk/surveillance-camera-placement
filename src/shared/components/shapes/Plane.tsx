import * as THREE from "three";

interface PlaneProps {
    rotation?: [x: number, y: number, z: number];
    size?: [width: number, height: number];
    color?: string;
}

const Plane: React.FC<PlaneProps> = (props) => {
    return (
        <mesh visible rotation={props.rotation ?? [0, 0, 0]}>
            <planeGeometry args={props.size ?? [1, 1]} />
            <meshBasicMaterial
                color={props.color ?? "0xFFFFFF"}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

export default Plane;
