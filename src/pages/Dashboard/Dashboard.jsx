import React, { useState, useEffect } from "react";
import MainLayout from "../../components/SharedLayoutComponents/MainLayout";
import '../../assets/css/dashboard/dashboard.css'

const Dashboard = () => {
    return (
      <MainLayout>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the ERP Dashboard!</p>
      </MainLayout>
    );
};

export default Dashboard;