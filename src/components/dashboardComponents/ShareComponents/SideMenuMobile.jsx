/* import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';
import MuiToolbar from '@mui/material/Toolbar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: '8px',
    p: '8px',
    pb: 0,
  },
}); */

{/*export default function SideMenuMobile({ open, toggleDrawer, user }) {
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const data = user.data;
  console.log(data);
  return (
   <AppBar
        position="fixed"
        sx={{
          display: { xs: 'auto', md: 'none' },
          boxShadow: 0,
          bgcolor: 'background.paper',
          backgroundImage: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider',
         top: 0,            
         zIndex: 1100, 
        }}
      >
        <Toolbar variant="regular">
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              flexGrow: 1,
              width: '100%',
              gap: 1,
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: 'center', mr: 'auto' }}
            >
              <CustomIcon />
              <Typography variant="h4" component="h1" sx={{ color: 'text.primary' }}>
                Dashboard
              </Typography>
            </Stack>
            <ColorModeIconDropdown />
            <MenuButton aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuRoundedIcon />
            </MenuButton>
           
              <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                [`& .${drawerClasses.paper}`]: {
                  backgroundImage: 'none',
                  backgroundColor: 'background.paper',
                },
              }}
            >
              <Stack
                sx={{
                  maxWidth: '70dvw',
                  height: '100%',
                }}
              >
                <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
                  <Stack
                    direction="row"
                    sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
                  >
                    <Avatar
                      sizes="small"
                      alt={[data.Fname, data.Mname, data.Lname].filter(Boolean).join(' ')}
                      src="/static/images/avatar/7.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography component="p" variant="h6">
                      {[data.Fname, data.Mname, data.Lname].filter(Boolean).join(' ')}
                    </Typography>
                  </Stack>
                  <MenuButton showBadge>
                    <NotificationsRoundedIcon />
                  </MenuButton>
                </Stack>
                <Divider />
                <Stack sx={{ flexGrow: 1 }}>
                  <MenuContent />
                  <Divider />
                </Stack>
                <Stack sx={{ p: 2 }}>
                  <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
                    Logout
                  </Button>
                </Stack>
              </Stack>
            </Drawer>
          </Stack>
        </Toolbar>
      </AppBar>
  );
}
*/}
/* SideMenuMobile.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func.isRequired,
};
 */
/* export default SideMenuMobile; */
/* export function CustomIcon() {
  return (
    <Box
      sx={{
        width: '1.5rem',
        height: '1.5rem',
        bgcolor: 'black',
        borderRadius: '999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundImage:
          'linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)',
        color: 'hsla(210, 100%, 95%, 0.9)',
        border: '1px solid',
        borderColor: 'hsl(210, 100%, 55%)',
        boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
      }}
    >
      <DashboardRoundedIcon color="inherit" sx={{ fontSize: '1rem' }} />
    </Box>
  );
} */

  import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Box from '@mui/material/Box';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
});

export default function SideMenuMobile({ open, toggleDrawer, user }) {
  console.log(user);
  const data = user.data;

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: 'auto', md: 'none' },
        boxShadow: 0,
        bgcolor: 'background.paper',
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar variant="regular">
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            gap: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: 'center', mr: 'auto' }}
          >
            <CustomIcon />
            <Typography variant="h4" component="h1" sx={{ color: 'text.primary' }}>
              Dashboard
            </Typography>
          </Stack>
          <ColorModeIconDropdown />
          <MenuButton aria-label="menu" onClick={() => toggleDrawer(true)}>
            <MenuRoundedIcon />
          </MenuButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={() => toggleDrawer(false)}
            sx={{
              zIndex: (theme) => theme.zIndex.drawer + 1,
              [`& .${drawerClasses.paper}`]: {
                backgroundImage: 'none',
                backgroundColor: 'background.paper',
              },
            }}
          >
            <Stack sx={{ maxWidth: '70dvw', height: '100%' }}>
              <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
                <Stack direction="row" sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}>
                  <Avatar
                    sizes="small"
                    alt={[data.Fname, data.Mname, data.Lname].filter(Boolean).join(' ')}
                    src="/static/images/avatar/7.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography component="p" variant="h6">
                    {[data.Fname, data.Mname, data.Lname].filter(Boolean).join(' ')}
                  </Typography>
                </Stack>
                <MenuButton showBadge>
                  <NotificationsRoundedIcon />
                </MenuButton>
              </Stack>
              <Divider />
              <Stack sx={{ flexGrow: 1 }}>
                <MenuContent />
                <Divider />
              </Stack>
              <Stack sx={{ p: 2 }}>
                <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
                  Logout
                </Button>
              </Stack>
            </Stack>
          </Drawer>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

SideMenuMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export function CustomIcon() {
  return (
    <Box
      sx={{
        width: '1.5rem',
        height: '1.5rem',
        bgcolor: 'black',
        borderRadius: '999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundImage:
          'linear-gradient(135deg, hsl(210, 98%, 60%) 0%, hsl(210, 100%, 35%) 100%)',
        color: 'hsla(210, 100%, 95%, 0.9)',
        border: '1px solid',
        borderColor: 'hsl(210, 100%, 55%)',
        boxShadow: 'inset 0 2px 5px rgba(255, 255, 255, 0.3)',
      }}
    >
      <DashboardRoundedIcon color="inherit" sx={{ fontSize: '1rem' }} />
    </Box>
  );
}
