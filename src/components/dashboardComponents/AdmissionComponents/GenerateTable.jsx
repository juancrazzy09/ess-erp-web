import React, { useState, useEffect } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TextField, Box, Typography, Button
} from '@mui/material';
import dayjs from 'dayjs';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenerateTableData } from '../../../State/AdmissionState/Action';

const columns = ['Application Number','First Name', 'Middle Name', 'Last Name','Student Type', 'Division', 'Level', 'Campus', 'Date Submitted', 'Action'];

export default function GenerateTable({ status }) {
  console.log(status);
  //const status = activeStatus.status;
  const dispatch = useDispatch();

  // Redux data
  const { data, total, loading } = useSelector(state => state.admission.list);

  // Local component state
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0); // 0-based for MUI TablePagination
  const [pageSize, setPageSize] = useState(10);
  const [title, setTitle] = useState('');

  // Title based on status
  useEffect(() => {
    switch (status) {
      case "P":
        setTitle("List of Pending Applicants");
        break;
      case "O":
        setTitle("List of Ongoing Applicants");
        break;
      case "Y":
        setTitle("List of Enrolled Applicants");
        break;
      default:
        setTitle("List of All Applicants");
        break;
    }
  }, [status]);

  // Fetch data when page, pageSize, search, or status changes
  useEffect(() => {
    dispatch(fetchGenerateTableData({
      page: page + 1, // API expects 1-based page
      pageSize,
      search,
      status
    }));
  }, [dispatch, page, pageSize, search, status]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page on page size change
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(0); // Reset to first page when search changes
  };
   const handleClick = (StudentId) => {
    const url = `/admission/student-information?studentId=${StudentId}`;
    window.open(url, '_blank');
  };
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3, maxWidth: '100%' }}>
      <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{title}</Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search…"
          value={search}
          onChange={handleSearchChange}
        />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col}><strong>{col}</strong></TableCell>
              ))}
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
                  <TableCell>{row.ApplicationNumber}</TableCell>
                  <TableCell>{row.Fname}</TableCell>
                  <TableCell>{row.Mname || ''}</TableCell>
                  <TableCell>{row.Lname}</TableCell>
                  <TableCell>{row.StudentType || ''}</TableCell>
                  <TableCell>{row.DivName || ''}</TableCell>
                  <TableCell>{row.LevelName || ''}</TableCell>
                  <TableCell>{row.CampusName || ''}</TableCell>
                  <TableCell>
                    {row.DateCreated ? dayjs(row.DateCreated).format('MM-DD-YYYY') : ''}
                  </TableCell>
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
                        onClick={() => handleClick(row.StudentId)}
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

      <TablePagination
        component="div"
        count={total || 0}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={pageSize}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25, 50 ,100]}
      />
    </Paper>
  );
}
