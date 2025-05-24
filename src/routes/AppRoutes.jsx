import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import { AuthProvider }  from "../customHooks/AuthHook"; */
/* import PrivateRoute from "./PrivateRoute"; */
import Index from '../pages/Index/Index';
import StudentOnlineApplication from '../pages/Index/StudentOnlineApplication';
import Login from "../pages/Auth/Login";
import Admission from "../pages/Dashboard/Admission/Dashboard";
import StudentInformationForm from "../pages/Dashboard/Admission/StudentInformationForm";


const AppRoutes = () => (
<Router>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/Index" element={<Index />} />
    <Route path="/StudentOnlineApplication" element={<StudentOnlineApplication />} />
    <Route 
      path="/*"
      element={
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/admission/dashboard"
              element={ <Admission /> }
            />
            <Route
              path="/admission/student-information/"
              element={ <StudentInformationForm /> }
            />
          </Routes>
     /*    <AuthProvider>
         
        </AuthProvider> */
      }
    />
  </Routes>
</Router>
   
);

export default AppRoutes;