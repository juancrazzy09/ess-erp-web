import * as React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideMenuMobile from '../dashboardComponents/ShareComponents/SideMenuMobile';
import Header from '../dashboardComponents/ShareComponents/Header';
import SideMenu from '../dashboardComponents/ShareComponents/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
    chartsCustomizations,
    dataGridCustomizations,
    treeViewCustomizations,

} from '../dashboardComponents/theme';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...treeViewCustomizations,
}; 
import useAuth from '../../customHooks/AuthHook';
export default function MainLayout(props) {
  const { userData, isAuthenticated } = useAuth();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  if(isAuthenticated){
  console.log(userData);
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu  user={userData} />
        <SideMenuMobile 
        user={userData}
        open={drawerOpen} 
        toggleDrawer={toggleDrawer} 
        />
        <Header />
        <Box
           component="main"
           sx={(theme) => ({
             flexGrow: 1,
             backgroundColor: theme.vars
               ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
               : alpha(theme.palette.background.default, 1),
             overflow: 'auto',
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             minHeight: '100vh',
             paddingTop: { xs: '56px', md: '80px' }, // ✅ Apply padding to make room for fixed Header
           })}
        >
           <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
           
            {props.children}
          </Stack> 
        </Box>
      </Box>
    </AppTheme>
  );
  }
}