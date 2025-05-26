import { 
    Avatar, 
    Box,
    Typography, 
    Alert,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Grid,
    Button, 
    Modal,
    Snackbar
 } from "@mui/material";
import ButtonSuccess from '../../buttonComponents/ButtonSuccess';
import ButtonWarning from '../../buttonComponents/ButtonWarning';
import ButtonDanger from "../../buttonComponents/ButtonDanger.jsx";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import InfoIcon from '@mui/icons-material/Info';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import { fetchAdmissionSubmitGPAData, fetchStudentGPAData } from "../../../State/AdmissionState/Action.js";


const initialRows = [
  { code: 'Eng', subject: 'English', grade: '' },
  { code: 'Ma',  subject: 'Math', grade: '' },
  { code: 'Sci', subject: 'Science', grade: '' },
  { code: 'Fil', subject: 'Filipino', grade: '' },
  { code: 'Ap',  subject: 'Araling Panlipunan', grade: '' },
  { code: 'Co',  subject: 'Conduct', grade: '' },
];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function GPAFormComponent({ studentId }){

    const dispatch = useDispatch();

    Object.keys(localStorage);


    const { data, total, loading } = useSelector(state => state.admission.gpalist);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const currUserId = userData.data.UserId; 
    const StudentId = studentId.studentId.StudentId;

    console.log(data);
    useEffect(() => {
        dispatch(fetchStudentGPAData(StudentId));

    }, [dispatch, StudentId]);

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            const updatedRows = initialRows.map(row => {
            const match = data.find(item => item.SubjectCode === row.code);
            return match
                ? { ...row, grade: parseFloat(match.Grade).toFixed(2) }
                : row;
            });
            setRows(updatedRows);
        }
    }, [data]);

    const [rows, setRows] = useState(initialRows);

    const handleGradeChange = (index, newGrade) => {
        setRows(prev =>
        prev.map((row, i) =>
            i === index ? { ...row, grade: newGrade } : row
        )
        );
    };

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleSubmitData = async () => {
        let hasError = false;
        const validatedRows = rows.map((row) => {
            const grade = parseFloat(row.grade);
            
            if (isNaN(grade) || grade < 0 || grade > 100) {
                hasError = true;
                return { ...row, error: true };
            }

            return { ...row, grade: grade.toFixed(2), error: false }; // Optionally round
        });

        setRows(validatedRows);

        if (hasError) {
            alert("Please ensure all grades are between 0 and 100.");
            return;
        }
        console.log(currUserId);
        // If all inputs are valid
        const gradeData = validatedRows.map(({ code, subject, grade }) => ({
            StudentId,
            subjectCode: code,
            subjectName: subject,
            grade,
            encodedBy: currUserId
        }));

        var res = await dispatch(fetchAdmissionSubmitGPAData(gradeData));
        console.log(res);
        if(res.ok){
            setSuccessOpen(true);
        }
        else {
            setFailedOpen(true);
        }

        handleCloseModal();
        
    };

    const handleClear = () => {
        setRows(initialRows);
    };

    const [openSuccess, setSuccessOpen] = React.useState(false);
    const [openFailed, setFailedOpen] = React.useState(false);
    const handleSubmitSuccClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setSuccessOpen(false);
    };


    const handleSubmitFailedClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setFailedOpen(false);
    };

    return(
        <div>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt: 2}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar
                            sx={{
                            bgcolor: 'green',
                            boxShadow: '0 4px 8px rgba(0, 128, 0, 0.5)',
                            width: 36,
                            height: 36,
                            }}
                        >
                        <InfoIcon sx={{ color: 'white' }} />
                        </Avatar>
                        <Typography 
                        variant="h6"
                        component="h6"
                        sx={{ color: 'green'}}
                        >
                        GPA Previous School 
                        </Typography>
                    </Box>
                </Grid>
                <Box sx={{pt:2}}>
                    <Alert variant="outlined" severity="warning" >
                        You can encode the grade base on the submitted Previous Report Card.
                    </Alert>
                </Box>
            </Box>
           <Box sx={{ maxWidth: 800, mx: 'auto', pt: 2 }}>
            <TableContainer component={Paper} elevation={3}>
                <Table size="small">
                <TableHead sx={{ bgcolor: 'green' }}>
                    <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Subject Code</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Subject</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">
                        Grade
                    </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row, idx) => (
                    <TableRow
                        key={row.code}
                        sx={{
                        '&:hover': {
                            backgroundColor: '#DDF6D2',
                        },
                        borderBottom: '2px solid black',
                        }}
                    >
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.subject}</TableCell>
                        <TableCell align="right" sx={{ width: 120 }}>
                        <TextField
                            variant="standard"
                            type="number"
                            value={row.grade === null || row.grade === undefined ? '' : row.grade}
                            inputProps={{ step: 0.01, min: 0, max: 100 }}
                            onChange={e => handleGradeChange(idx, e.target.value)}
                            sx={{ width: 80, textAlign: 'right' }}
                        />
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, pt: 1}}>
                <ButtonWarning str="Clear" onClick={handleClear} />
                <ButtonSuccess  icon={<SaveAltOutlinedIcon/>} str="Save" onClick={handleOpenModal} />
            </Box>
            </Box>
            <Modal open={openModal} onClose={handleCloseModal}>
            <Box sx={style}>
                <Typography variant="h6" gutterBottom>
                Are you sure you want to save?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                <ButtonSuccess str="Yes" onClick={handleSubmitData}/>
                <ButtonDanger str="No"
                    onClick={handleCloseModal}
                />
                </Box>
            </Box>
            </Modal>
        <Snackbar open={openSuccess} autoHideDuration={2000} onClose={handleSubmitSuccClose}>
        <Alert
            onClose={handleSubmitSuccClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            Grades are updated!
        </Alert>
        </Snackbar>
        <Snackbar open={openFailed} autoHideDuration={2000} onClose={handleSubmitFailedClose}>
        <Alert
            onClose={handleSubmitFailedClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
        >
            There is an error occured!
        </Alert>
        </Snackbar>            
        </div>
    );
}

export default GPAFormComponent;