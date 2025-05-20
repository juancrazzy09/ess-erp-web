import React, { useState, useEffect } from "react";
import MainLayout from "../../../components/SharedLayoutComponents/MainLayout";
import '../../../assets/css/dashboard/dashboard.css'
import IndexComponent from "../../../components/dashboardComponents/AdmissionComponents/IndexComponent";

const Dashboard = () => {
    return (
      <MainLayout>
        <IndexComponent />
      </MainLayout>
    );
};

export default Dashboard;