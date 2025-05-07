import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
/* import CustomDatePicker from './CustomDatePicker'; */
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';

import Search from './Search';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        position: 'fixed',
        top: 0,
        left: { xs: 0, md: '240px' }, // match your SideMenu width here
        width: { xs: '100vw', md: 'calc(100vw - 240px)' }, // adjust for SideMenu
        zIndex: 1100,
        backgroundColor: 'background.paper',
        display: { xs: 'none', md: 'flex' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        pt: 1.5,
        px: 2,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
     {/*    <CustomDatePicker /> */}
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}