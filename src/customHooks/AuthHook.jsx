import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AuthHook () {
  const navigate = useNavigate();
  const [authData, setAuthData] = useState({
    userData: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData || !storedUserData.data?.Token) {
      navigate('/login');
    } else {
      const tokenLength = storedUserData.data.Token.length;
      if (tokenLength > 0) {
        setAuthData({
          userData: storedUserData,
          isAuthenticated: true,
        });
      } else {
        navigate('/login');
      }
    }
  }, [navigate]);

  return authData;
}
export default AuthHook;