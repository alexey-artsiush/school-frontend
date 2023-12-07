import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { AuthForm } from '../AuthForm/AuthForm';
import { RegisterForm } from '@/features/Settings/ui/RegisterForm/RegisterForm';
import { getUserAuthData } from '@/entities/User';
import { logout } from '@/entities/User/model/services/auth/auth';
import { useAppDispatch } from '@/app/providers/StoreProvider';

export const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem: string) => {
    handleMenuClose();
    if (menuItem === 'LOG IN') {
      setIsAuthFormVisible(true);
    } else if (menuItem === 'SIGN IN') {
      setIsRegisterFormVisible(true);
    } else if (menuItem === 'LOGOUT') {
      dispatch(logout());
    }
  };

  return (
    <>
      <IconButton color="primary" onClick={handleMenuClick}>
        {authData ? <AccountCircleIcon color="primary" fontSize="large" /> : <SettingsIcon fontSize="large" color="primary" />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {!authData && <MenuItem onClick={() => handleMenuItemClick('LOG IN')}>LOG IN</MenuItem>}
        {!authData && <MenuItem onClick={() => handleMenuItemClick('SIGN IN')}>SIGN IN</MenuItem>}
        {authData && <MenuItem onClick={() => handleMenuItemClick('LOGOUT')}>LOGOUT</MenuItem>}
      </Menu>

      {isAuthFormVisible && (
      <AuthForm
        open
        anchorEl={anchorEl}
        onClose={() => setIsAuthFormVisible(false)}
      />
      )}
      {isRegisterFormVisible && (
      <RegisterForm
        open
        anchorEl={anchorEl}
        onClose={() => setIsRegisterFormVisible(false)}
      />
      )}

    </>
  );
};
