export interface Course {
  image: string;
  title: string;
  progress?: number;
  completed?: boolean;
  id: number
  video: string
  text: TextDetailCourse
}

export interface TextDetailCourse {
  intro: string
  end: string
}

export interface CoursesGetResponse {
  success: boolean
  data: Course[]
}

export interface CourseGetResponse {
  success: boolean
  data: Course
}

export interface CourseSchema {
  isLoading: boolean
  isError: boolean
  error: undefined | string
  courses: Course[] | undefined
  currentCourse: Course | undefined
}
