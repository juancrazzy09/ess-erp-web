import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import OnlineAppComponents from '../../components/indexComponents/OnlineAppComponents';
import Footer from '../../components/SharedLayoutComponents/Footer';
import '../../assets/css/index/index.css';

const drawerWidth = 240;

const navItems = [
  { label: 'Home'},
  {
    label: 'News & Events',
    dropdown: [
      { label: 'News & Announcement'},
      { label: 'Events in Campus'},
      { label: 'Upcomming Events'},
    ],
  },
  {
    label: 'Seton Admissions',
    dropdown: [
      {label: 'Student Requirements'}, 
      {label: 'Student Online Application'}
    ],
  },
  {
    label: 'About ESS',
    dropdown: [
      { label: 'Contact Us' },
      { label: 'Seton History'},
      { label: 'Elizabeth Ann Seton' },
      { label: 'Alumni' },
      { label: 'Seton Notes' },
    ],
  },
  {
    label: 'Programs',
    dropdown: [
      { label: 'Academic Programs'},
      { label: 'Special Programs' },
      { label: 'Student Services' },
    ],
  },
  {
    label: 'Login',
    dropdown: ['Portal', 'ELIZA'],
  },
];

function StudentOnlineApplication(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState('');
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('home-background');
    return () => document.body.classList.remove('home-background');
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu('');
  };

  const getRoute = (menu, subItem) => {
    // Top-level direct navigations
    if (menu === 'Login' && subItem === 'Portal') return '/login';
    if (menu === 'Home') return '/';
  
    // News & Events
    if (
      menu === 'News & Events' &&
      ['News & Announcement', 'Events in Campus', 'Upcomming Events'].includes(subItem)
    ) {
      return '/';
    }
  
    // About ESS
    if (
      menu === 'About ESS' &&
      ['Contact Us', 'Seton History', 'Elizabeth Ann Seton', 'Alumni', 'Seton Notes'].includes(subItem)
    ) {
      return '/';
    }
  
    // Programs
    if (
      menu === 'Programs' &&
      ['Academic Programs', 'Special Programs', 'Student Services'].includes(subItem)
    ) {
      return '/';
    }
  
    // Seton Admissions
    if (menu === 'Seton Admissions') {
      if (subItem === 'Student Requirements') return '/';
      if (subItem === 'Student Online Application') return '/StudentOnlineApplication';
    }
  
    return '/'; // fallback default
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePortalClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/login');
      setLoading(false);
    }, 1500);
  };

  const LoadingOverlay = () => (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src="/src/assets/img/seton logo.png"
        alt="Loading..."
        sx={{ width: 300, height: 'auto', mb: 2 }}
      />
      <Typography variant="h6" sx={{ color: 'green', fontWeight: 'bold' }}>
        Loading...
      </Typography>
    </Box>
  );

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src="/src/assets/img/ESS-Logo.png"
        alt="Logo"
        sx={{ height: 40, my: 2 }}
      />
      <Divider />
      <List>
        {navItems.map((item) => {
          const isDropdownOpen = openDropdown === item.label;

          return (
            <Box key={item.label}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: 'center',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 128, 0, 0.1)',
                    },
                  }}
                  onClick={() => {
                    if (item.dropdown) {
                      setOpenDropdown(isDropdownOpen ? null : item.label);
                    } else {
                      if (item.targetId) scrollToId(item.targetId);
                      else navigate(getRoute(item.label, item.label));
                      setMobileOpen(false);
                    }
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>

              {item.dropdown &&
                isDropdownOpen &&
                item.dropdown.map((subItem) => {
                  const isObject = typeof subItem === 'object';
                  const label = isObject ? subItem.label : subItem;
                  const targetId = isObject ? subItem.targetId : null;

                  return (
                    <ListItem key={label} disablePadding sx={{ pl: 4 }}>
                      <ListItemButton
                        sx={{
                          textAlign: 'left',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 128, 0, 0.1)',
                          },
                        }}
                        onClick={() => {
                          if (
                            item.label === 'Login' &&
                            label === 'Portal'
                          ) {
                            setMobileOpen(false);
                            handlePortalClick();
                          } else if (targetId) {
                            scrollToId(targetId);
                            setMobileOpen(false);
                          } else {
                            navigate(getRoute(item.label, label));
                            setMobileOpen(false);
                          }
                          setOpenDropdown(null);
                        }}
                      >
                        <ListItemText primary={label} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
            </Box>
          );
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh' }}>
      <CssBaseline />
      {loading && <LoadingOverlay />}
      <AppBar component="nav" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="img"
            src="/src/assets/img/ESS-logo.png"
            alt="Logo"
            sx={{ height: 60, display: { xs: 'none', sm: 'block' }, mr: 2 }}
          />

          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
            {navItems.map((item) =>
              item.dropdown ? (
                <Button
                  key={item.label}
                  sx={{
                    color: '#fff',
                    fontWeight: { xs: 'bold', sm: 'normal' },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: 1,
                    },
                  }}
                  onClick={(e) => handleMenuOpen(e, item.label)}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  sx={{
                    color: '#fff',
                    fontWeight: { xs: 'bold', sm: 'normal' },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: 1,
                    },
                  }}
                  onClick={() => scrollToId(item.targetId)}
                >
                  {item.label}
                </Button>
              )
            )}

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {(navItems.find((item) => item.label === activeMenu)?.dropdown || []).map((subItem, index, array) => {
                const isObject = typeof subItem === 'object';
                const label = isObject ? subItem.label : subItem;

                return (
                  <React.Fragment key={label}>
                    <MenuItem
                      onClick={() => {
                        handleMenuClose();
                        if (activeMenu === 'Login' && label === 'Portal') {
                          handlePortalClick();
                        } else if (isObject && subItem.targetId) {
                          scrollToId(subItem.targetId);
                        } else {
                          navigate(getRoute(activeMenu, label));
                        }
                      }}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(0, 128, 0, 0.1)',
                          color: 'green',
                        },
                      }}
                    >
                      {label}
                    </MenuItem>
                    {index < array.length - 1 && <Divider />}
                  </React.Fragment>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ width: '100vw', minHeight: '100vh', p: 0, m: 0, overflowX: 'hidden' }}>
        <Box sx={{ width: '100%', backgroundColor: 'white', pt: 8,}}>
          <OnlineAppComponents />
        </Box>     
       

        <Box>
          <Divider>All Rights Reserved.</Divider>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

StudentOnlineApplication.propTypes = {
  window: PropTypes.func,
};

export default StudentOnlineApplication;
