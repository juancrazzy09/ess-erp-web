import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    return () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        navigate('/login');
      };
}

export default LogoutPage;
