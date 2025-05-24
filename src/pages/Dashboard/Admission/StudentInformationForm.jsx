import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // ⬅️ Make sure this is imported
import MainLayout from "../../../components/SharedLayoutComponents/MainLayout";
import StudentFormComponent from "../../../components/dashboardComponents/AdmissionComponents/StudentFormComponent";
import { Typography } from "@mui/material";

const StudentInformationForm = () => {
  const [searchParams] = useSearchParams();
  const studentId = searchParams.get("studentId");

  useEffect(() => {
   if (studentId) {
     console.log("Student ID:", studentId);
    // Dispatch or any action here
   }
  }, [studentId]);

  return (
    <MainLayout>
      <Typography
        variant="h2"
        component="h2"
        sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3, color: 'green'}}
      >
        Online Application Information
      </Typography>
      <StudentFormComponent StudentId={studentId} />
    </MainLayout>
  );
};

export default StudentInformationForm;
