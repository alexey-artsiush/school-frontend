// @ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import {
  FormControl, MenuItem, Select, SelectChangeEvent, useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '@/shared/assets/logo.svg?react';
import { SideBarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { getRouteMain } from '../../../../shared/const/router';
import { Settings } from '@/features/Settings';
import { Drawer, Header } from '@/widgets/Sidebar/ui/Sidebar/SidebarStyles';
import { getSidebarData } from '@/widgets/Sidebar/model/consts/consts';

interface SideBarProps {
  children: React.ReactNode
}

export const SideBar = ({ children }: SideBarProps) => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const dataSidebar = getSidebarData();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

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
          backgroundColor: theme.palette.background.purple,
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
          padding: '15px 40px', marginTop: '92px', width: '100vw', minHeight: 'calc(100vh - 92px)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
