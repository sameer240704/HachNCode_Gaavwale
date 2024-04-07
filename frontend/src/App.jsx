import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Homepage, Login, SignUp, Music } from "./pages";
import { SidebarStateProvider } from "./hooks/useSidebarState";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Drums from "./components/Music/Drums";
import { useAuthContext } from "./context/AuthContext";
import useAarav from "./hooks/useAarav";
import DataVisualisation from "./components/DataVisualisation";
import Excel from "./components/Excel";

function App() {
  const { authUser } = useAuthContext();
  useAarav();
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
            path="/login"
            element={authUser ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/dashboard" /> : <SignUp />}
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
            path="/music"
            element={
              <>
                <Sidebar />
                <Music />
              </>
            }
          />
          <Route
            path="/visualization"
            element={
              <>
                <Sidebar />
                <DataVisualisation />
              </>
            }
          />
          <Route
            path="/BarChart"
            element={
              <>
                <Sidebar />
                <Excel />
              </>
            }
          />
          <Route
            path="/LineChart"
            element={
              <>
                <Sidebar />
                <Excel />
              </>
            }
          />
          <Route
            path="/DoughnutChart"
            element={
              <>
                <Sidebar />
                <Excel />
              </>
            }
          />
          <Route
            path="/PieChart"
            element={
              <>
                <Sidebar />
                <Excel />
              </>
            }
          />
          <Route
            path="/BubbleChart"
            element={
              <>
                <Sidebar />
                <Excel />
              </>
            }
          />
          <Route
            path="/ScatterChart"
            element={
              <>
                <Sidebar />
                <Excel />
              </>
            }
          />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </SidebarStateProvider>
  );
}

export default App;
