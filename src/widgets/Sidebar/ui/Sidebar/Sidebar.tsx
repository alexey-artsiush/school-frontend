// @ts-nocheck

import * as React from 'react';
import {
  styled, Theme, CSSObject,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Chat } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {
  FormControl, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '@/shared/assets/logo.svg?react';
import { SideBarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { getRouteChat, getRouteMain } from '../../../../shared/const/router';
import { Settings } from '@/features/Settings';
import theme from '@/app/styles/theme/theme';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',

  width: `calc(${theme.spacing(13)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(14)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Header = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  background: 'none',
  width: `calc(100% - ${theme.spacing(14)})`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${theme.spacing(29)})`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    backgroundColor: theme.palette.secondary.main,
    width: drawerWidth,
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface SideBarProps {
  children: React.ReactNode
}

export const SideBar = ({ children }: SideBarProps) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const dataSidebar = [
    {
      icon: <MenuIcon />,
      text: t('Main'),
      route: getRouteMain(),
    },
    {
      icon: <Chat />,
      text: t('Chat'),
      route: getRouteChat(),
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        open={open}
        sx={{
          boxShadow: 'none',
          display: 'flex',
          justifyContent: 'end',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: theme.palette.background.default,
          borderBottom: '1px solid #7784EE',
        }}
      >
        <FormControl sx={{ margin: '8px', width: '70px', color: 'primary' }}>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            onChange={(event) => handleChange(event)}
            sx={{
              '.MuiSelect-icon': {
                display: 'none',
              },
              '.MuiOutlinedInput-notchedOutline': {
                border: 0,
              },
            }}
            MenuProps={{
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
            }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ru">RU</MenuItem>
          </Select>
        </FormControl>

        <Settings />

      </Header>
      <Drawer
        variant="permanent"
        open={open}
      >

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          minHeight: '100vh',
          color: '#FFFFFF',
        }}
        >
          <Link to={getRouteMain()}>
            <Logo sx={{ margin: 'auto' }} />
          </Link>

          <List>
            {dataSidebar.map((item) => (
              <SideBarItem
                open={open}
                icon={item.icon}
                text={item.text}
                key={item.text}
                sx={{ margin: 'auto' }}
                route={item.route}
              >
                {item.text}
              </SideBarItem>
            ))}
          </List>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

      </Drawer>
      <Box
        component="main"
        sx={{
          padding: '10px', marginTop: '92px', width: '100vw', minHeight: 'calc(100vh - 92px)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
