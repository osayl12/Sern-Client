import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { theme, menuWidth, HeaderHeight } from "../theme_params";
import { navItems } from "../Routers/main_R";

function NavDrawer({ mobileOpen, onClose, isDesktop }) {
  const navigate = useNavigate();
  const location = useLocation();

  const drawerContent = (
    <List sx={{ pt: 0 }}>
      {navItems.map((item) => (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            selected={location.pathname === item.path}
            onClick={() => {
              navigate(item.path);
              if (!isDesktop) onClose();
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {isDesktop && (
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: menuWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: menuWidth,
              boxSizing: "border-box",
              top: `${HeaderHeight}px`,
              height: `calc(100% - ${HeaderHeight}px)`,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
      {!isDesktop && (
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={onClose}
          sx={{ "& .MuiDrawer-paper": { width: menuWidth } }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}

function EmptyLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (t) => t.zIndex.drawer + 1, height: HeaderHeight }}
      >
        <Toolbar sx={{ height: "100%", justifyContent: "space-between" }}>
          <Typography variant="h6">מערכת ניהול שפות</Typography>
          {!isDesktop && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flex: 1, mt: `${HeaderHeight}px` }}>
        <Box
          component="main"
          sx={{ flex: 1, p: 3, mr: isDesktop ? `${menuWidth}px` : 0 }}
        >
          <Outlet />
        </Box>
        <NavDrawer
          isDesktop={isDesktop}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </Box>
    </Box>
  );
}

export default EmptyLayout;
