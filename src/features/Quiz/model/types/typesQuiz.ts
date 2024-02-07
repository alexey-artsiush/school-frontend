export interface QuizData {
  id: number;
  image: string;
  courseId: number;
  course: CourseData;
  quiz: {
    id: number;
    courseId: number;
    questions: QuestionData;
  };
}

export interface CourseData {
  id: number;
  link: string;
  name: string;
}

export interface QuestionData {
  id: number;
  text: string;
  options: { [key: string]: string };
  correctOption: string;
}
