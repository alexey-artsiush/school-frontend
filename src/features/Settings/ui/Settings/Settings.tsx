import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { AuthForm } from '../AuthForm/AuthForm';

export const Settings: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem: string) => {
    handleMenuClose(); // Close the menu when a menu item is clicked
    if (menuItem === 'Authorization') {
      setIsAuthFormVisible(true);
    }
  };

  return (
    <>
      <IconButton color="primary" onClick={handleMenuClick}>
        <SettingsIcon color="primary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleMenuItemClick('Authorization')}>Authorization</MenuItem>
      </Menu>
      {isAuthFormVisible && (
        <AuthForm
          open
          anchorEl={anchorEl}
          onClose={() => setIsAuthFormVisible(false)}
        />
      )}
    </>
  );
};
