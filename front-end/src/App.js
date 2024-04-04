import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import { useAuth } from "./utils/AuthContext";
import SideBar from "./components/SideBar";

function App() {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <div className="flex">
        {token && <SideBar />}
        <Routes>
          {!token ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <Route path="/" element={<Dashboard />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
