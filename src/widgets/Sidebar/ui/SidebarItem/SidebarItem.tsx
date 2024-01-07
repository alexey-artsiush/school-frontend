// @ts-nocheck

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import { SvgIconComponent } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

interface SideBarItemProps {
  open: boolean
  icon: SvgIconComponent
  text: string
  route: string
}
export const SideBarItem = ({
  open, icon, text, route,
}: SideBarItemProps) => {
  const theme = useTheme();

  return (
    <ListItem key={text} disablePadding>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
        component={Link}
        to={route}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : '0',
            justifyContent: 'center',
            color: theme.palette.icons.secondary,
          }}
        >
          {icon}
        </ListItemIcon>
        <Typography
          color={theme.palette.text.secondary}
          variant="h6"
          sx={{ opacity: open ? 1 : 0, width: open ? 'auto' : 0 }}
        >
          {text}
        </Typography>
      </ListItemButton>

    </ListItem>
  );
};
