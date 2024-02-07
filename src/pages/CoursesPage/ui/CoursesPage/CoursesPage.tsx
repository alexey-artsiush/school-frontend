import { useEffect } from 'react';
import { ListCourses } from '@/entities/Course';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { getCourseState } from '@/entities/Course/model/selectors/getCourse/getCourse';
import { getCourses } from '@/entities/Course/model/services/courseService';

const CoursesPage = () => {
  const dispatch = useAppDispatch();
  const { courses } = useAppSelector(getCourseState);

  const searchParams = {};

  useEffect(() => {
    dispatch(getCourses(searchParams));
  }, []);

  return (
    <ListCourses courses={courses} />
  );
};

export default CoursesPage;
