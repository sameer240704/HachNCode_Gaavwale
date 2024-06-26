import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Canvas from "./Canvas";
import { IoIosUndo, IoIosRedo } from "react-icons/io";

const Room = ({ userNo, socket, setUsers, setUserNo }) => {
  // These useRef hooks are used to store references to the canvas DOM element and its context.
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  // These useState hooks are used to manage the state of the color, elements, history, and tool.
  const [color, setColor] = useState("#000000");
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);
  const [tool, setTool] = useState("pencil");

  useEffect(() => {
    // This useEffect hook sets up a listener for the "message" event on the socket.
    // When a "message" event is received, it displays a toast notification with the message data.
    socket.on("message", (data) => {
      toast.info(data.message);
    });
  }, []);

  useEffect(() => {
    // This useEffect hook sets up a listener for the "users" event on the socket.
    // When a "users" event is received, it updates the users and userNo state variables with the new data.
    socket.on("users", (data) => {
      setUsers(data);
      setUserNo(data.length);
    });
  }, []);

  const clearCanvas = () => {
    // This function clears the canvas and resets the elements state variable.
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setElements([]);
  };

  const undo = () => {
    // This function removes the last element from the elements array and adds it to the history array.
    setHistory((prevHistory) => [
      ...prevHistory,
      elements[elements.length - 1],
    ]);
    setElements((prevElements) =>
      prevElements.filter((ele, index) => index !== elements.length - 1)
    );
  };

  const redo = () => {
    // This function removes the last element from the history array and adds it to the elements array.
    setElements((prevElements) => [
      ...prevElements,
      history[history.length - 1],
    ]);
    setHistory((prevHistory) =>
      prevHistory.filter((ele, index) => index !== history.length - 1)
    );
  };

  return (
    <div className="container-fluid">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-center mt-2 text-7xl">WHITEBOARD</h1>
        <h6 className="display-10 pt-4 ml-10 text-center">
          <span className="text-blue-500">ONLINE USERS: </span>
          {userNo}
        </h6>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="col-md-2">
          <div className="color-picker d-flex align-items-center justify-content-center">
            Color Picker : &nbsp;
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center gap-10 my-2">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tools"
              id="pencil"
              value="pencil"
              checked={tool === "pencil"}
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
            />
            <label className="form-check-label" htmlFor="pencil">
              Pencil
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tools"
              id="line"
              value="line"
              checked={tool === "line"}
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
            />
            <label className="form-check-label" htmlFor="line">
              Line
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="tools"
              id="rect"
              value="rect"
              checked={tool === "rect"}
              onClick={(e) => setTool(e.target.value)}
              readOnly={true}
            />
            <label className="form-check-label" htmlFor="rect">
              Rectangle
            </label>
          </div>
        </div>

        <div className="col-md-2">
          <button
            type="button"
            className="bg-slate-500 p-2 rounded-3xl opacity-50 hover:opacity-100"
            disabled={elements.length === 0}
            onClick={() => undo()}
          >
            <IoIosUndo />
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="bg-slate-500 p-2 rounded-3xl opacity-50 hover:opacity-100"
            disabled={history.length < 1}
            onClick={() => redo()}
          >
            <IoIosRedo />
          </button>
        </div>
        <div className="col-md-1">
          <div className="color-picker d-flex align-items-center justify-content-center">
            <input
              type="button"
              className="px-3 py-2 bg-red-600 opacity-50 rounded-lg hover:opacity-100 active:scale-95"
              value="Clear Canvas"
              onClick={clearCanvas}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <Canvas
          canvasRef={canvasRef}
          ctx={ctx}
          color={color}
          setElements={setElements}
          elements={elements}
          tool={tool}
          socket={socket}
        />
      </div>
    </div>
  );
};

export default Room;
