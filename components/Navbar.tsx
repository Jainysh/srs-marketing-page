import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Lungi", path: "/products/lungi" },
    { label: "Towels", path: "/products/towels" },
    { label: "Sarees", path: "/products/sarees" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, bgcolor: "background.paper", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            fontFamily: "Playfair Display",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Legacy Textiles
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={handleDrawerToggle}
            sx={{
              borderLeft: router.pathname === item.path ? "4px solid" : "none",
              borderColor: "primary.main",
              bgcolor:
                router.pathname === item.path ? "primary.light" : "transparent",
            }}
          >
            <Link href={item.path} passHref legacyBehavior>
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiTypography-root": {
                    fontWeight: router.pathname === item.path ? 600 : 400,
                    color:
                      router.pathname === item.path
                        ? "primary.dark"
                        : "text.primary",
                    fontSize: "1.125rem",
                  },
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
              {/* Logo */}
              <Link href="/" passHref legacyBehavior>
                <Box
                  component="a"
                  sx={{
                    fontFamily: "Playfair Display",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 700,
                    color: "primary.main",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  Legacy Textiles
                </Box>
              </Link>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.path}
                    passHref
                    legacyBehavior
                  >
                    <Button
                      sx={{
                        color:
                          router.pathname === item.path
                            ? "primary.main"
                            : "text.primary",
                        fontWeight: router.pathname === item.path ? 600 : 400,
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: router.pathname === item.path ? "80%" : "0%",
                          height: "2px",
                          bgcolor: "primary.main",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": {
                          width: "80%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </Box>

              {/* Mobile menu button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" }, color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
