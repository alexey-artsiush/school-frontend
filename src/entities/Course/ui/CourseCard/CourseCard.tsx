import React from 'react';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Course } from '@/entities/Course/model/types/course';
import {
  CourseCardLinearProgress, StyledCardContent, StyledCardMedia, StyledCourseCard,
} from './CourseCardStyles';

export const CourseCard: React.FC<Course> = ({
  image, title, progress, completed, id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <StyledCourseCard onClick={handleClick}>
      <Box sx={{
        display: 'flex', borderRadius: '10px 0 0 10px', overflow: 'hidden', padding: '10px',
      }}
      >
        <StyledCardMedia image={image} />

        <StyledCardContent>
          <Typography
            variant="h3"
            component="div"
            sx={{
              mb: '8px',
            }}
          >
            {title}
          </Typography>

          <Box style={{ display: 'flex', alignItems: 'end', height: 'calc(100% - 32px)' }}>
            {completed ? (
              <>
                <CheckCircleOutlineIcon sx={{ color: 'green', mb: '14px' }} />
                <Typography
                  fontWeight={700}
                  color="textSecondary"
                  sx={{
                    mb: '14px',
                    fontSize: { xs: '12px', lg: '16px' },
                    padding: '0',
                  }}
                >
                  Completed
                </Typography>
              </>

            ) : (
              <>
                <Typography
                  fontWeight={700}
                  sx={{
                    mb: '4px',

                    display: () => ({
                      xs: 'none',
                      sm: 'block',
                    }),
                  }}
                >
                  Progress
                </Typography>
                <CourseCardLinearProgress
                  variant="determinate"
                  value={progress}
                />

              </>
            )}
          </Box>

        </StyledCardContent>
      </Box>
    </StyledCourseCard>
  );
};
