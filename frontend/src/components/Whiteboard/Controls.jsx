/* eslint-disable react/prop-types */
import { TbRectangle } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { GiArrowCursor } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa6";
import { TbTextSize } from "react-icons/tb";
import { ACTIONS } from "../../data/constants";

export default function Controls({
  action,
  setAction,
  fillColor,
  setFillColor,
  handleExport,
}) {
  return (
    <div className="absolute w-[400px] h-2/12 top-0 left-[36%] z-50 py-2 bg-white">
      <div className="flex h-full w-full justify-center items-center gap-3 py-2 px-3 mx-auto border shadow-black shadow-md rounded-lg">
        <button
          className={
            action === ACTIONS.SELECT
              ? "bg-violet-300 p-1 rounded"
              : "p-1 hover:bg-violet-100 rounded"
          }
          onClick={() => setAction(ACTIONS.SELECT)}
        >
          <GiArrowCursor size={"2rem"} />
        </button>
        <button
          className={
            action === ACTIONS.RECTANGLE
              ? "bg-violet-300 p-1 rounded"
              : "p-1 hover:bg-violet-100 rounded"
          }
          onClick={() => setAction(ACTIONS.RECTANGLE)}
        >
          <TbRectangle size={"2rem"} />
        </button>
        <button
          className={
            action === ACTIONS.CIRCLE
              ? "bg-violet-300 p-1 rounded"
              : "p-1 hover:bg-violet-100 rounded"
          }
          onClick={() => setAction(ACTIONS.CIRCLE)}
        >
          <FaRegCircle size={"1.5rem"} />
        </button>
        <button
          className={
            action === ACTIONS.ARROW
              ? "bg-violet-300 p-1 rounded"
              : "p-1 hover:bg-violet-100 rounded"
          }
          onClick={() => setAction(ACTIONS.ARROW)}
        >
          <FaLongArrowAltRight size={"2rem"} />
        </button>
        <button
          className={
            action === ACTIONS.SCRIBBLE
              ? "bg-violet-300 p-1 rounded"
              : "p-1 hover:bg-violet-100 rounded"
          }
          onClick={() => setAction(ACTIONS.SCRIBBLE)}
        >
          <LuPencil size={"1.5rem"} />
        </button>

        <button
          className={
            action === ACTIONS.TEXT
              ? "bg-violet-300 p-1 rounded"
              : "p-1 hover:bg-violet-100 rounded"
          }
          onClick={() => setAction(ACTIONS.TEXT)}
        >
          <TbTextSize size={"1.5rem"} />
        </button>

        <button>
          <input
            className="w-6 h-6"
            type="color"
            value={fillColor}
            onChange={(e) => setFillColor(e.target.value)}
          />
        </button>

        <button onClick={handleExport}>
          <IoMdDownload size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
}
