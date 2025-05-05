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

import SideCarousel from '../../components/indexComponents/SideCarousel';
import TopMenu from '../../components/indexComponents/TopMenu';
import EventCarousel from '../../components/indexComponents/EventsCarousel';
import SliderCard from '../../components/indexComponents/SliderCard';
import UpcommingEvents from '../../components/indexComponents/UpcommingEventsComponents';
import AboutUsComponent from '../../components/indexComponents/AboutUsComponent';
import SpecialProgram from '../../components/indexComponents/SpecialProgram';
import StudentReqAndEnroll from '../../components/indexComponents/StudentReqAndEnroll';
import Footer from '../../components/SharedLayoutComponents/Footer';
import '../../assets/css/index/index.css';

const drawerWidth = 240;

const navItems = [
  { label: 'Home', targetId: 'home-section' },
  {
    label: 'News & Events',
    dropdown: [
      { label: 'News & Announcement', targetId: 'newsevents-section' },
      { label: 'Events in Campus', targetId: 'campevents-section' },
      { label: 'Upcomming Events', targetId: 'upevents-section' },
    ],
  },
  {
    label: 'Seton Admissions',
    dropdown: [
      {label: 'Student Requirements', targetId: 'student-enrollment'}, 
      {label: 'Student Online Application', targetId: 'student-enrollment'}
    ],
  },
  {
    label: 'About ESS',
    dropdown: [
      { label: 'Contact Us' },
      { label: 'Seton History', targetId: 'history-section' },
      { label: 'Elizabeth Ann Seton' },
      { label: 'Alumni' },
      { label: 'Seton Notes' },
    ],
  },
  {
    label: 'Programs',
    dropdown: [
      { label: 'Academic Programs', targetId: 'school-program-section' },
      { label: 'Special Programs', targetId: 'special-program' },
      { label: 'Student Services' },
    ],
  },
  {
    label: 'Login',
    dropdown: ['Portal', 'ELIZA'],
  },
];

function DrawerAppBar(props) {
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
    if (menu === 'Login' && subItem === 'Portal') return '/login';
    return '/'; // fallback
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
        <Box id="home-section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '40px' }}>
          <TopMenu />
        </Box>

        <Box id="newsevents-section" sx={{ width: '100%', backgroundColor: 'green', py: 2, textAlign: 'center',boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            News & Announcement
          </Typography>
        </Box>
        <SideCarousel />

        <Box id="campevents-section" sx={{ width: '100%', backgroundImage: 'linear-gradient(to right, green, yellow)', py: 2, textAlign: 'center', }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            Events in Campus
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: 'green', width: '100%', pt: '10px', px: 2, py: 2 }}>
          <EventCarousel />
        </Box>

      {/*   <Toolbar /> */}

        <Box id="school-program-section" sx={{ width: '100%', backgroundImage: 'linear-gradient(to left, green, yellow)', py: 2, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            School Programs
          </Typography>
        </Box>
        <SliderCard />
        <Box id="special-program" sx={{ width: '100%', backgroundImage: 'linear-gradient(to left, green, yellow)', py: 2, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            Special Program
          </Typography>
        </Box>
        <SpecialProgram />
        <Box id="student-enrollment" sx={{ width: '100%', backgroundImage: 'linear-gradient(to left, green, yellow)', py: 2, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            Student Requirements & Enrollment Application
          </Typography>
        </Box>
        <StudentReqAndEnroll />
        <Box id="upevents-section" sx={{ width: '100%', backgroundImage: 'linear-gradient(to bottom, green, yellow)', py: 2, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            Upcomming Events
          </Typography>
        </Box>
        <UpcommingEvents />

        <Box id="history-section" sx={{ width: '100%', backgroundImage: 'linear-gradient(to top, green, yellow)', py: 2, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
            About Us
          </Typography>
        </Box>
        <AboutUsComponent />

        <Box>
          <Divider>All Rights Reserved.</Divider>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
