import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
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
      <CourseTypography mb={2}>{currentCourse?.text.intro}</CourseTypography>
      <VideoPlayer videoUrl={currentCourse?.video} />
      <CourseTypography mt={2}>{currentCourse?.text.end}</CourseTypography>
    </>

  );
};

export default CourseDetailPage;
