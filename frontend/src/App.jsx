import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Homepage, Login, SignUp, Music } from "./pages";
import { SidebarStateProvider } from "./hooks/useSidebarState";
import Sidebar from "./components/Sidebar";
``;
import "./App.css";
import Drums from "./components/Music/Drums";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <SidebarStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Sidebar />
                <Dashboard />
              </>
            }
          />
          <Route path="/login" element={authUser ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/dashboard" /> : <SignUp />} />
          <Route
            path="/music/drums"
            element={
              <>
                <Sidebar />
                <Drums />
              </>
            }
          />
          <Route
            path="/music"
            element={
              <>
                <Sidebar />
                <Music />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </SidebarStateProvider>
  );
}

export default App;
