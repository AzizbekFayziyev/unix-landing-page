import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Button, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({media}) {
  const [position, setPosition] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const [menuIsOpen, setMenuOpen] = useState(false);
  const [loginPageOpen, setLoginPageOpen] = useState(false);

  const menuOpen = (e) => {
    setMenuOpen(true);
    setMenuPosition(e.currentTarget);
  }

  const navbarLinks = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "Products",
      link: "#products",
    },
    {
      title: "Buy unix token",
      link: "#unix",
    },
    {
      title: "community",
      link: "#community",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    })
  }, []);


  // Navbar
  return (
    <AppBar
      sx={position ? {} : { boxShadow: "none" }}
      color={position ? "primary" : "transparent"}
      position={position ? "fixed" : "absolute"}>

      <Toolbar
        sx={{ display: "felx", alignItems: "center", justifyContent: "space-between" }}>

        {media ? (
          (
            <IconButton size="large" edge="start" onClick={menuOpen}>
              <MenuIcon fontSize='20px' />
            </IconButton>
          )
        ) : ""}

        <Stack alignItems="center" flexDirection="row">
          <Avatar sx={{ mr: 1 }} className='gradient'>
            U
          </Avatar>
          <Typography color="text.primary" fontWeight={700} variant="h6">
            unix gaming
          </Typography>
        </Stack>

        {media ? (
          <Menu
            anchorEl={menuPosition}
            open={menuIsOpen}
            onClose={() => setMenuOpen(false)}
          >
            {navbarLinks.map((menu, id) => (
              <MenuItem key={id}>
                <Link color="text.primary" href={menu.link}>{menu.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        ) : (
          <Stack flexDirection="row">
            {navbarLinks.map((menu, id) => (
              <Button key={id} size="large" sx={{ mr: 2.5 }} href={menu.link}>
                <Typography variant="button" color="text.primary">{menu.title}</Typography>
              </Button>
            ))}
          </Stack>
        )
        }

        <Button
          onClick={() => setLoginPageOpen(true)}
          className='outlinedBtn'
          size="large">
          <Typography color="text.secondary" variant="button">Login</Typography>
        </Button>

      </Toolbar >

      <Drawer
        anchor='right'
        open={loginPageOpen}
        onClose={() => setLoginPageOpen(false)}>

        <List sx={{ width: media ? "80vw" : "30vw" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="SIGN UP" secondary="You alerdy login?" />
            </ListItemButton>
          </ListItem>
          <Divider>OR</Divider>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="LOGIN" secondary="You are new?" />
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer>

    </AppBar >
  )
}
