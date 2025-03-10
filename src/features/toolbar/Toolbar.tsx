import { useDispatch, useSelector } from "react-redux";
import { selectCameraLock, toggleLockCamera } from "../ui/uiSlice";

type ActionButton = {
    action: string;
    label: string;
};

const Toolbar: React.FC = () => {
    const dispatch = useDispatch();
    const lock = useSelector(selectCameraLock);

    const actions: ActionButton[] = [
        {
            action: "Default",
            label: "Default",
        },
        {
            action: "Place Point",
            label: "Place Point",
        },
        {
            action: "Add Camera",
            label: "Add Camera",
        },
        {
            action: "Load Model",
            label: "Load Model",
        },
        {
            action: "Toggle Lock",
            label: lock ? "Unlock Camera" : "Lock Camera",
        },
    ];

    const actionHandler = (action: string) => {
        switch (action) {
            case "Toggle Lock":
                dispatch(toggleLockCamera());
                break;
            default:
                break;
        }
    };

    return (
        <div className="bg-blue-500 text-black p-4">
            {actions.map((action, index) => {
                return (
                    <button
                        key={index}
                        className="bg-white text-black p-2 m-2 hover:bg-gray-300 active:bg-gray-400"
                        onClick={() => actionHandler(action.action)}
                    >
                        {action.label}
                    </button>
                );
            })}
        </div>
    );
};

export default Toolbar;
