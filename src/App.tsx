import Toolbar from "./features/toolbar/Toolbar";
import Scene from "./features/scene/Scene";
import Info from "./features/info/Info";

const App: React.FC = () => {
    return (
        <div className="h-screen w-screen flex flex-col">
            <Toolbar />
            <div className="flex flex-grow">
                <div className="flex-none w-1/4 resize-x min-w-1/5 max-w-1/3 overflow-auto">
                    <Info />
                </div>
                <div className="flex-grow overflow-auto">
                    <Scene />
                </div>
            </div>
        </div>
    );
};

export default App;
