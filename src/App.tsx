import "./App.css";
import Scene from "./components/Scene";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
    return (
        <>
            <h1>Surveillance Camera Placement</h1>
            <Sidebar />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    zIndex: -1,
                }}
            >
                <Scene />
            </div>
        </>
    );
};

export default App;
