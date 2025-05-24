import React, { useRef, useState, useEffect } from "react";
import MainLayout from "../../../components/SharedLayoutComponents/MainLayout";
/* import '../../../assets/css/dashboard/dashboard.css' */
import IndexComponent from "../../../components/dashboardComponents/AdmissionComponents/IndexComponent";

const Dashboard = () => {
  const layoutRef = useRef();
  const [mainWidth, setMainWidth] = useState(null);

  useEffect(() => {
    if (layoutRef.current) {
      const width = layoutRef.current.getMainWidth();
      setMainWidth(width);
      console.log('Main width:', width);
    }
  }, []);
    return (
      <MainLayout>
        <IndexComponent mainWidth={mainWidth}/>
      </MainLayout>
    );
};

export default Dashboard;