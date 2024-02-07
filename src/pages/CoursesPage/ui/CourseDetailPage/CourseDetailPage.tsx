import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { getCourseDetail } from '@/entities/Course/model/selectors/getCourse/getCourse';
import { getCourse } from '@/entities/Course/model/services/courseService';
import { VideoPlayer } from '@/features/VideoPlayer';
import { CourseTypography } from '@/pages/CoursesPage/ui/CoursePageStyles';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';

const CourseDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { currentCourse } = useAppSelector(getCourseDetail);

  useEffect(() => {
    dispatch(getCourse({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Typography variant="h3" mb={5}>{currentCourse?.title}</Typography>
      <CourseTypography mb={2}>{currentCourse?.text?.intro}</CourseTypography>
      <VideoPlayer videoUrl={currentCourse?.video} />
      <CourseTypography mt={2}>{currentCourse?.text?.end}</CourseTypography>

      <Button
        component={Link}
        to={`/quiz/${id}`}
        variant="contained"
        color="primary"
        sx={{ position: 'absolute', right: 50, bottom: 50 }}
      >
        Перейти к тесту
      </Button>
    </>

  );
};

export default CourseDetailPage;
