import { Canvas } from "@react-three/fiber";
import Plane from "./shapes/Plane";
import Box from "./shapes/Box";

const Scene: React.FC = () => {
    return (
        <Canvas
            dpr={[1, 2]}
            gl={{ alpha: false }}
            camera={{ position: [-2, 1, 7], fov: 50 }}
        >
            <color attach="background" args={["#f6d186"]} />
            <Plane rotation={[Math.PI / 2, 0, 0]} size={[5, 5]} color="red" />
            <Plane color="blue" size={[2, 3]} />
            <Box />
        </Canvas>
    );
};

export default Scene;
