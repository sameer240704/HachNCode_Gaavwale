import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Homepage, Login, SignUp, Music, LeaderBoard} from "./pages";
import { SidebarStateProvider } from "./hooks/useSidebarState";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Drums from "./components/Music/Drums";
import MyPiano from "./components/Music/Keyboard";

function App() {
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/leaderboard"
            element={
              <>
                <Sidebar />
                <LeaderBoard />
              </>
            }
          />
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
            path="/music/keyboard"
            element={
              <>
                <Sidebar />
                <MyPiano />
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
