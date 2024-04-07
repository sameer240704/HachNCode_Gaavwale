import React, { useRef } from "react";
import { Socket } from "socket.io-client";
import { CgClose } from "react-icons/cg";

const Sidebar = ({ users, user, socket }) => {
  // This useRef hook is used to store a reference to the sidebar DOM element.
  const sideBarRef = useRef(null);

  const openSideBar = () => {
    // This function is triggered when the "Users" button is clicked.
    // It sets the left style property of the sidebar to 0, effectively sliding it into view.
    sideBarRef.current.style.left = 0;
  };

  const closeSideBar = () => {
    // This function is triggered when the "Close" button is clicked.
    // It sets the left style property of the sidebar to -100%, effectively sliding it out of view.
    sideBarRef.current.style.left = -100 + "%";
  };

  // The render method returns the JSX that should be rendered by this component.
  // It includes a "Users" button, a sidebar with a "Close" button, and a list of users.
  return (
    <div className="mt-0">
      <div
        className="position-fixed h-100 bg-dark"
        ref={sideBarRef}
        style={{
          width: "150px",
          left: "-100%",
          transition: "0.3s linear",
          zIndex: "9999",
        }}
      >
        <div className="w-100">
          {users.map((usr, index) => (
            <p key={index} className="text-center py-2">
              {usr.username}
              {usr.id === socket.id && " - (You)"}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
