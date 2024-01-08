import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';

export const StyledCourseCard = styled(Card)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.borders?.main}`,
  borderRadius: '10px',
  boxShadow: 'none',
  cursor: 'pointer',
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: '120px',
  width: '120px',
  borderRadius: '10px',
}));

export const StyledCardContent = styled(CardContent)(() => ({
  flex: 1,
  padding: '6px 6px 6px 24px',
}));

export const CourseCardLinearProgress = styled(LinearProgress)(() => ({
  height: '6px',
  width: '20%',
  minWidth: '120px',
  margin: '0 0 12px 16px',
  borderRadius: '5px',
}));
