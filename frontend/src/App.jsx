import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Homepage, Music } from "./pages";
import { SidebarStateProvider } from "./hooks/useSidebarState";
import Sidebar from "./components/Sidebar";
import "./App.css";

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
