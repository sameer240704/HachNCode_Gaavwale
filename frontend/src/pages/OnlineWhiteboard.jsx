import { useEffect, useState } from "react";
import io from "socket.io-client";
import ClientRoom from "../components/OnlineWhiteboard/ClientRoom";
import JoinCreateRoom from "../components/OnlineWhiteboard/JoinCreateRoom";
import Room from "../components/OnlineWhiteboard/Room";
import Sidebar from "../components/OnlineWhiteboard/Sidebar";

const server = "http://localhost:4000";

const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);

const OnlineWhiteboard = () => {
  const [userNo, setUserNo] = useState(0);
  const [roomJoined, setRoomJoined] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const uuid = () => {
    var S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  useEffect(() => {
    if (roomJoined) {
      socket.emit("user-joined", user);
    }
  }, [roomJoined]);

  return (
    <div className="home">
      {roomJoined ? (
        <>
          <Sidebar users={users} user={user} socket={socket} />
          {user.presenter ? (
            <Room
              userNo={userNo}
              user={user}
              socket={socket}
              setUsers={setUsers}
              setUserNo={setUserNo}
            />
          ) : (
            <ClientRoom
              userNo={userNo}
              user={user}
              socket={socket}
              setUsers={setUsers}
              setUserNo={setUserNo}
            />
          )}
        </>
      ) : (
        <JoinCreateRoom
          uuid={uuid}
          setRoomJoined={setRoomJoined}
          setUser={setUser}
        />
      )}
    </div>
  );
};
export default OnlineWhiteboard;
