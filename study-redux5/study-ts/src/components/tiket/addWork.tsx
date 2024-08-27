import { useRef } from "react";
import { addWork } from "../../store";
import { useAppDispatch } from "../../store";

const AddWork = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-md p-2 shadow-md m-2">
      <label htmlFor="">Work:</label>
      <input
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (name.current = e.target.value)}
      />
      <button
        onClick={() => dispatch(addWork({ work: name.current }))}
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </div>
  );
};

export default AddWork;
