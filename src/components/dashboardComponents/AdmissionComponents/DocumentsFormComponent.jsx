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
import InfoIcon from '@mui/icons-material/Info';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import dayjs from 'dayjs';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocumenttableData } from '../../../State/AdmissionState/Action';


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

function DocumentFormComponent({studentId}){
    console.log(studentId.studentId.StudentId);
    const student_Id = studentId.studentId.StudentId;
    const dispatch = useDispatch();

    const { data, total, loading } = useSelector(state => state.admission.docs);

    console.log(data);
    useEffect(() => {
        dispatch(fetchDocumenttableData(student_Id));
    }, [dispatch, student_Id])

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleClick = ( UserId, FileId ) => {
        console.log(UserId);
        console.log(FileId);
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
                        Document Submitted
                        </Typography>
                    </Box>
                </Grid>
                <Box sx={{pt:2}}>
                    <Alert variant="outlined" severity="warning" >
                        You can monitor and upload the document for the student.
                    </Alert>
                </Box>
            </Box>
            <Box sx={{ maxWidth: 800, mx: 'auto', pt: 2 }}>
            <TableContainer component={Paper} elevation={3}>
                <Table size="small">
                <TableHead sx={{ bgcolor: 'green' }}>
                    <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Document Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Date Submitted</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Uploaded By</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }}>Remarks</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 600 }} align="right">
                        Action
                    </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {loading ? (
                    <TableRow><TableCell colSpan={5} align="center">Loading...</TableCell></TableRow>
                        ) : data?.length ? (
                        data.map((row, idx) => (
                            <TableRow
                            key={idx}
                            sx={{
                                borderBottom: '2px solid',
                                borderColor: 'black',
                                cursor: 'pointer',
                                '&:hover': { backgroundColor: 'action.hover' },
                            }}
                            >
                            <TableCell>{row.DocumentType}</TableCell>
                            <TableCell>
                                {row.DateCreated ? dayjs(row.DateCreated).format('MM-DD-YYYY') : ''}
                            </TableCell>
                            <TableCell>{row.UploadedById || ''}</TableCell>
                            <TableCell>{row.Remarks}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: 'primary.main',
                                        borderColor: 'primary.main',
                                        '&:hover': {
                                        borderColor: 'primary.dark',
                                        backgroundColor: 'primary.light',
                                        },
                                    }}
                                    size="small"
                                    startIcon={<RemoveRedEyeOutlinedIcon fontSize="small" />}
                                    onClick={() => handleClick(row.UserId, row.FileId)}
                                    >
                                    View
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))
                        ) : (
                        <TableRow>
                            <TableCell colSpan={5} align="center">
                            No results found.
                            </TableCell>
                        </TableRow>
                        )}
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
export default DocumentFormComponent;