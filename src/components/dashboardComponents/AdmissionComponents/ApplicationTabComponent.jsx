import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import GPAFormComponent from './GPAFormComponent';
import DocumentFormComponent from './DocumentsFormComponent';
import SiblingsTable from './SiblingsTable';

export default function ApplicationTabComponent(studentId) {
    console.log(studentId);
  const [value, setValue] = React.useState('GPA');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div>
    <Box sx={{ width: '100%', bgcolor: 'green', px: 2, py: 1 }}>
        <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{
            style: {
                backgroundColor: 'white',
                height: 3,
            },
            }}
            sx={{
            '& .MuiTab-root': {
                color: 'white',
                fontWeight: 400,
                textTransform: 'none',
                border: 'none',
                outline: 'none',
                borderRadius: 0,
                minHeight: 48,
                transition: 'border-bottom 0.3s ease',
                borderBottom: '3px solid transparent',
                '&:hover': {
                borderBottom: '3px solid white',
                backgroundColor: 'transparent',
                },
                '&.Mui-selected': {
                color: 'white',
                fontWeight: 700,
                borderBottom: '3px solid white',
                },
                '&:focus': {
                outline: 'none',
                },
            },
            '& .MuiTabs-indicator': {
                display: 'none', // hide MUI's default indicator if not using it
            },
            }}
        >
            <Tab label="GPA Previous School" value="GPA" disableRipple sx={{ width: '200px', minWidth: '200px' }}/>
            <Tab label="Documents Submitted" value="DS" disableRipple sx={{ width: '200px', minWidth: '200px' }}/>
            <Tab label="Siblings" disableRipple value="SB" sx={{ width: '200px', minWidth: '200px' }}/>
        </Tabs>
    </Box>
    <Box>
        <Box>
            {value == "GPA" &&
                <GPAFormComponent studentId={studentId} />
            }
            {value == "DS" &&
                <DocumentFormComponent studentId={studentId} />
            }
            {value == "SB" &&
                <SiblingsTable studentId={studentId}/>
            }
        </Box>
    </Box>
    </div>
    
  );
}
