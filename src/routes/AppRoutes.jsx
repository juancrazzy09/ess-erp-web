import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider }  from "../customHooks/AuthHook";
import PrivateRoute from "./PrivateRoute";
import Index from '../pages/Index/Index';
import StudentOnlineApplication from '../pages/Index/StudentOnlineApplication';
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";


const AppRoutes = () => (
<Router>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/Index" element={<Index />} />
    <Route path="/StudentOnlineApplication" element={<StudentOnlineApplication />} />
    <Route 
      path="/*"
      element={
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      }
    />
  </Routes>
</Router>
   
);

export default AppRoutes;