import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { SvgIconComponent } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface SideBarItemProps {
  open: boolean
  icon: SvgIconComponent
  text: string
  route: string
}
export const SideBarItem = ({
  open, icon, text, route,
}: SideBarItemProps) => (
  <ListItem key={text} disablePadding sx={{ display: 'block' }}>

    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
        color: '#FFFFFF',
      }}
      component={Link}
      to={route}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : '0',
          justifyContent: 'center',
          color: '#FFFFFF',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{ opacity: open ? 1 : 0, width: open ? 'auto' : 0 }}
      />
    </ListItemButton>

  </ListItem>
);
