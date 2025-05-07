import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import MenuContent from './MenuContent';
import OptionsMenu from './OptionsMenu';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export default function SideMenu({ user }) {
  if (!user) {
    return (
      <div style={{ padding: '1rem' }}>
        <Skeleton variant="text" width={160} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} style={{ marginTop: '1rem' }} />
        <Skeleton variant="rounded" width={120} height={40} style={{ marginTop: '1rem' }} />
      </div>
    );
  }
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1.5,
        }}
      >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <img src="/src/assets/img/seton logo.png" alt="Logo" style={{ height: 32 }} />
        <Typography variant="h7" sx={{ fontWeight: 'bold', color: 'green'}}>
          Elizabeth Seton School
        </Typography>
      </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent />
    {/*     <CardAlert /> */}
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
          {[user.fname, user.mname, user.lname].filter(Boolean).join(' ')}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          { user.email }
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}