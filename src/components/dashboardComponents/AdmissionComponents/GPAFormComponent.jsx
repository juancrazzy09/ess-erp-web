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
 } from "@mui/material";
import ButtonSuccess from '../../buttonComponents/ButtonSuccess';
import ButtonWarning from '../../buttonComponents/ButtonWarning';
import ButtonDanger from "../../buttonComponents/ButtonDanger.jsx";
import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';

const initialRows = [
  { code: 'Eng', subject: 'English', },
  { code: 'Ma',  subject: 'Math', },
  { code: 'Sci', subject: 'Science', },
  { code: 'Fil', subject: 'Filipino', },
  { code: 'Ap',  subject: 'Araling Panlipunan',  },
  { code: 'Co',  subject: 'Conduct', },
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
    
    console.log(studentId);
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
                            value={row.grade}
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
                <ButtonWarning str="Clear" />
                <ButtonSuccess  icon={<SaveAltOutlinedIcon/>} str="Save" onClick={handleOpenModal} />
            </Box>
            </Box>
            <Modal open={openModal} onClose={handleCloseModal}>
            <Box sx={style}>
                <Typography variant="h6" gutterBottom>
                Are you sure you want to save?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                <ButtonSuccess str="Yes"/>
                <ButtonDanger str="No"
                    onClick={handleCloseModal}
                />
                </Box>
            </Box>
            </Modal>
        </div>
    );
}

export default GPAFormComponent;