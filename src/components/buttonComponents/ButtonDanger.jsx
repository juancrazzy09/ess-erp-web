import { Button } from '@mui/material';

function ButtonDanger({ icon = null, str, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: '#d32f2f', // red
        color: 'white',
        '&:hover': {
          backgroundColor: '#b71c1c', // darker red on hover
        },
        width: '100px',
      }}
      startIcon={icon ? icon : null}
    >
      {str}
    </Button>
  );
}

export default ButtonDanger;
