import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { getQuizState } from '@/entities/Quiz/model/selectors/getQuiz/getQuiz';
import { Quiz } from '@/features/Quiz';
import { getQuiz } from '@/entities/Quiz/model/services/quizService';

const QuizPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { quiz, isError, isLoading } = useAppSelector(getQuizState);

  useEffect(() => {
    dispatch(getQuiz({ id }));
  }, [dispatch, id]);

  return (
    <Quiz quiz={quiz} isLoading={isLoading} isError={isError} />
  );
};

export default QuizPage;
