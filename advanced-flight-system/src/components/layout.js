// src/components/layout.js
import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, Box, Fab, useTheme, useMediaQuery, Dialog, DialogContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import { StaticImage } from "gatsby-plugin-image";
import { useUser } from "../contexts/UserContext";
// import * as styles from "./layout.module.css";

const Layout = ({ children }) => {
  const { user, setUser } = useUser();
  const [navOpen, setNavOpen] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSignOut = () => {
    setUser(null);
    navigate('/');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavOpen(open);
  };

  const handleChatOpen = () => {
    setOpenChat(true);
  };

  const handleChatClose = () => {
    setOpenChat(false);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Flight Search', 'My Reservations', 'Flight Journal', 'User Profile', 'Login'].map((text, index) => (
          <ListItem button key={text} component={Link} to={`/${text.replace(/ /g, '-').toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to="/" style={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <StaticImage
              src="../images/logo.png"
              alt="Advanced Flight System Logo"
              width={50}
              height={50}
              style={{ marginRight: 10 }}
            />
            {!isMobile && <Typography variant="h6">Advanced Flight System</Typography>}
          </Link>
          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              <Button color="inherit" component={Link} to="/flight-search">Flight Search</Button>
              <Button color="inherit" component={Link} to="/my-reservations">My Reservations</Button>
              <Button color="inherit" component={Link} to="/flight-journal">Flight Journal</Button>
              {user ? (
                <>
                  <Button color="inherit" component={Link} to="/user-profile">User Profile</Button>
                  <Button color="inherit" onClick={handleSignOut}>Sign Out</Button>
                </>
              ) : (
                <Button color="inherit" component={Link} to="/login">Login</Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer
          anchor="left"
          open={navOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerList}
        </Drawer>
      )}

      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '10px' }}>
        <p>© {new Date().getFullYear()} Dusan Stanic 2019203040 Interakcija Covek Racunar</p>
      </footer>

      {/* Virtual Assistant Chat Button */}
      <Fab color="primary" aria-label="chat" onClick={handleChatOpen} style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <ChatIcon />
      </Fab>
      {/* Virtual Assistant Chat Dialog */}
      <Dialog open={openChat} onClose={handleChatClose} fullWidth maxWidth="sm">
        <DialogContent>
          <Typography variant="h6"> Open AI key missing, or has expired</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Layout;
