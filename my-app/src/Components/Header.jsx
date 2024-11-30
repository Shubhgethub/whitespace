import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#043873', padding: '0 16px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" color="inherit" sx={{ fontWeight: 'bold' }}>
          Whitespace
        </Typography>

       
        {isMobile ? (
          <>
         
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List
                sx={{ width: 250 }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                {['Products', 'Solutions', 'Resources', 'Pricing', 'Login', 'Try Whitespace Free'].map((text) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
         
            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff', marginRight: '16px', textTransform: 'none' }}
              >
                {item}
              </Button>
            ))}

           
          
            <Button
              variant="outlined"
              sx={{
                color: '#black',
                borderColor: '#fff',
                backgroundColor:'#FFE492',
                marginRight: '16px',
                textTransform: 'none',
                '&:hover': { borderColor: '#fff' },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FDBA74',
                color: '#1E3A8A',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#FB923C' },
              }}
            >
              Try Whitespace Free
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

