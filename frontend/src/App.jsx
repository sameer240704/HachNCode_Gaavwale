import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Homepage } from "./pages";
import { SidebarStateProvider } from "./hooks/useSidebarState";
import Sidebar from "./components/Sidebar";

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
        </Routes>
      </BrowserRouter>
    </SidebarStateProvider>
  );
}

export default App;
