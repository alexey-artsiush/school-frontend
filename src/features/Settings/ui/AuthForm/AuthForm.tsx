// @ts-nocheck

import React from 'react';
import {
  TextField, Button, Popover, Typography, Divider, Box,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '@/entities/User/model/services/auth/auth';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface AuthFormProps {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

export const AuthForm: React.FC<AuthFormProps> = ({ open, onClose, anchorEl }) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
      onClose();
    },
  });

  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      sx={{
        marginTop: '70px',
      }}
    >
      <Box p={2} width={300}>
        <Typography variant="h6" gutterBottom>
          Login
        </Typography>
        <Divider />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            style={{ marginTop: 10 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Popover>
  );
};
