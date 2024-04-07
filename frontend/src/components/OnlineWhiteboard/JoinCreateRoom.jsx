import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

const JoinCreateRoom = ({ uuid, setUser, setRoomJoined }) => {
  // These useState hooks are used to manage the state of the room ID, name, joinName, and joinRoomId.
  const [roomId, setRoomId] = useState(uuid());
  const [name, setName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinRoomId, setJoinRoomId] = useState("");

  const handleCreateSubmit = (e) => {
    // This function is triggered when the create form is submitted.
    // It prevents the default form submission behavior, checks if a name was entered,
    // and then sets the user state and sets roomJoined to true.

    e.preventDefault();
    if (!name) return toast.dark("Please enter your name!");

    setUser({
      roomId,
      userId: uuid(),
      userName: name,
      host: true,
      presenter: true,
    });
    setRoomJoined(true);
  };

  const handleJoinSubmit = (e) => {
    // This function is triggered when the join form is submitted.
    // It prevents the default form submission behavior, checks if a name was entered,
    // and then sets the user state and sets roomJoined to true.

    e.preventDefault();
    if (!joinName) return toast.dark("Please enter your name!");

    setUser({
      roomId: joinRoomId,
      userId: uuid(),
      userName: joinName,
      host: false,
      presenter: false,
    });
    setRoomJoined(true);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center text-7xl">Student Whiteboard</h1>
        </div>
      </div>
      <div className="row mx-5 mt-5">
        <div className="col-md-5 p-5 border mx-auto rounded-3xl shadow-black shadow-sm">
          <h1 className="text-center text-yellow-200 mb-5 text-2xl">
            Create Room
          </h1>
          <form onSubmit={handleCreateSubmit}>
            <div className="my-2">
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-transparent px-5 py-3 text-white text-lg border-2 rounded-xl mb-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="my-2 border-2 align-items-center rounded-xl">
              <input
                type="text"
                className="w-full bg-transparent px-5 py-3"
                value={roomId}
                readOnly={true}
                style={{
                  boxShadow: "none",
                  zIndex: "0 !important",
                  fontsize: "0.89rem !important",
                }}
              />
              <div className="input-group-append">
                <button
                  className="bg-slate-600 opacity-50 ml-5 mb-5 px-5 py-2 rounded-xl active:scale-95 hover:opacity-100"
                  type="button"
                  onClick={() => setRoomId(uuid())}
                >
                  Generate
                </button>
                &nbsp;&nbsp;
                <CopyToClipboard
                  text={roomId}
                  onCopy={() => toast.success("Room Id Copied To Clipboard!")}
                >
                  <button
                    className="bg-orange-600 opacity-50 ml-5 mb-5 px-5 py-2 rounded-xl active:scale-95 hover:opacity-100"
                    type="button"
                  >
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="form-group mt-5">
              <button
                type="submit"
                className="bg-slate-700 opacity-50 px-5 py-2 rounded-xl active:scale-95 hover:opacity-100"
              >
                Create Room
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5 p-5 border mx-auto rounded-3xl shadow-black shadow-sm mt-3">
          <h1 className="text-center text-yellow-200 mb-5 text-2xl">
            Join Room
          </h1>
          <form onSubmit={handleJoinSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent px-5 py-3 text-white text-lg border-2 rounded-xl mb-1"
                value={joinName}
                onChange={(e) => setJoinName(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                className="w-full bg-transparent px-5 py-3 text-white text-lg border-2 rounded-xl mb-2"
                value={joinRoomId}
                onChange={(e) => setJoinRoomId(e.target.value)}
                placeholder="Room Id"
                style={{
                  boxShadow: "none",
                }}
              />
            </div>
            <div className="form-group mt-5">
              <button
                type="submit"
                className="bg-slate-700 opacity-50 px-5 py-2 rounded-xl active:scale-95 hover:opacity-100"
              >
                Join Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateRoom;
