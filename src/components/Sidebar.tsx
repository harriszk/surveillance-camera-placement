import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    return (
        <>
            <div id="sidebar">
                <h3>Cameras</h3>
                <div id="cameras-container">
                    <div id="button-container">
                        <button>Add Camera</button>
                        <button>Remove Camera</button>
                    </div>
                </div>

                <h3>Scene</h3>
                <div id="scene-container">
                    <div id="button-container">
                        <button>Load Model</button>
                        <button>Remove Scene</button>
                    </div>
                    <label>
                        <input type="checkbox" />
                        Show Grid
                    </label>
                    <label>
                        <input type="checkbox" />
                        Axis Helpers
                    </label>
                </div>

                <h3>Room Controls</h3>
                <div id="room-controls-container">
                    <div className="room-controls">
                        <label htmlFor="x-coordinate">X:</label>
                        <input type="text" id="x-coordinate" />
                        <label htmlFor="y-coordinate">Y:</label>
                        <input type="text" id="y-coordinate" />
                        <label htmlFor="z-coordinate">Z:</label>
                        <input type="text" id="z-coordinate" />
                        <button>Add Point</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
