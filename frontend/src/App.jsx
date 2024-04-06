import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Homepage, Login, SignUp, Music} from "./pages";
import { SidebarStateProvider } from "./hooks/useSidebarState";
import Sidebar from "./components/Sidebar";
``;
import "./App.css";
import Drums from "./components/Music/Drums";

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
