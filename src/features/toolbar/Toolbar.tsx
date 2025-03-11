import { useDispatch, useSelector } from "react-redux";
import { setActiveAction, UserActionType } from "./toolbarSlice";
import { selectCameraLock, toggleLockCamera } from "../scene/sceneSlice";

type Button = {
    type: UserActionType;
    label: string;
    action?: () => void;
};

const Toolbar: React.FC = () => {
    const dispatch = useDispatch();
    const lock = useSelector(selectCameraLock);

    const actionButtons: Button[] = [
        {
            type: UserActionType.DEFAULT,
            label: "Default",
        },
        {
            type: UserActionType.PLACE_POINT,
            label: "Place Point",
        },
        {
            type: UserActionType.ADD_CAMERA,
            label: "Add Camera",
        },
        {
            type: UserActionType.LOAD_MODEL,
            label: "Load Model",
        },
        {
            type: UserActionType.TOGGLE_LOCK,
            label: lock ? "Unlock Camera" : "Lock Camera",
            action: () => dispatch(toggleLockCamera()),
        },
    ];

    return (
        <div className="bg-zinc-200 text-black p-4 drop-shadow-md z-1">
            {actionButtons.map((button, index) => {
                return (
                    <button
                        key={index}
                        className="bg-zinc-50 text-black p-2 m-2 hover:bg-zinc-300 active:bg-zinc-400"
                        onClick={() => {
                            if (button.action) {
                                return button.action();
                            }

                            dispatch(setActiveAction(button.type));
                        }}
                    >
                        {button.label}
                    </button>
                );
            })}
        </div>
    );
};

export default Toolbar;
