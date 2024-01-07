import React from 'react';
import Box from '@mui/material/Box';
import { CourseCard } from '@/entities/Course/ui/CourseCard/CourseCard';
import { Course } from '@/entities/Course/model/types/course';

interface ListCoursesProps {
  courses: Course[] | undefined
}

export const ListCourses: React.FC<ListCoursesProps> = ({ courses }) => (
  <Box>
    {courses && courses.map((course) => (
      <CourseCard key={course.id} {...course} />
    ))}
  </Box>
);
