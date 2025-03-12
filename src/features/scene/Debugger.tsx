import { useState } from "react";
import { useSelector } from "react-redux";
import { selectVertices } from "./sceneSlice";

const Debugger: React.FC = () => {
    const [debugMode, setDebugMode] = useState<boolean>(false);
    const vertices = useSelector(selectVertices);

    return (
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
                    <p>Number of Vertices: {vertices.length}</p>
                </div>
            )}
        </div>
    );
};

export default Debugger;
