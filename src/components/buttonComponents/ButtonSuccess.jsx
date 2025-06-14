import { Button } from '@mui/material';

function ButtonSuccess({icon = null, str, onClick  }) {
  return (
    <Button
    onClick={onClick}
    sx={{
            backgroundColor: '#4CAF50',
            color: 'white',
            '&:hover': {
            backgroundColor: 'green',  // darker green on hover
            },
            width: '100px'
        }}
    startIcon={icon ? icon : null}
    >
    {str}
    </Button>
  );
}

export default ButtonSuccess;
