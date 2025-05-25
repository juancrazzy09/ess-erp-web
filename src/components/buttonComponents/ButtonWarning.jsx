import { Button } from '@mui/material';
function ButtonWarning({icon = null, str, onClick}){
    return(
       <Button
       onClick={onClick}
        sx={{
            backgroundColor: '#ffca28', // yellow-ish
            color: 'white',            // better contrast with yellow
            '&:hover': {
            backgroundColor: '#c49000',
            },
            width: '100px'
        }}
        startIcon={icon ? icon : null}
        >
        {str}
        </Button>
    );
}
export default ButtonWarning;