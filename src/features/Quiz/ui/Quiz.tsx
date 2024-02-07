import React, { ReactNode } from 'react';
import {
  Box,
  Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { QuizData } from '../model/types/typesQuiz';

interface QuizProps {
  quiz: QuizData;
  isError: boolean
  isLoading: boolean
}

const validationSchema = yup.object().shape({
  answers: yup
    .mixed()
    .test('all-fields-filled', 'All fields must be filled', (value) => {
      if (!value) return false;
      const fields = Object.values(value);
      return fields.every((field: any) => field && field.trim() !== '');
    })
    .required(),
});

export const Quiz: React.FC<QuizProps> = ({
  quiz, isError, isLoading,
}) => {
  const initialValues = {
    answers: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log('Отправка ответов:', values);
      formik.resetForm();
    },
  });

  if (isLoading) return (<h1>Loading...</h1>);
  if (isError) return (<h1>Error...</h1>);

  return (
    <Container maxWidth="md">
      <Typography variant="h4">
        Квиз:
        {quiz?.course?.name}
      </Typography>
      <img src={quiz?.image} alt="Course" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />

      <form onSubmit={formik.handleSubmit}>
        {!isLoading && quiz && Object.entries(quiz.quiz.questions).map(([questionId, question]) => (
          <Box key={questionId}>
            <FormControl component="fieldset" style={{ marginTop: '20px' }}>
              <FormLabel component="legend">
                {question.text}
              </FormLabel>
              <RadioGroup
                aria-label={`${questionId}`}
                name={`${questionId}`}
                  // @ts-ignore
                value={formik.values[`${questionId}`] || ''}
                onChange={formik.handleChange}
              >
                {Object.entries(question.options).map(([optionId, optionText]) => (
                  <FormControlLabel key={optionId} value={optionId} control={<Radio />} label={optionText as ReactNode} />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        ))}

        <Box>
          <Button variant="contained" type="submit" color="primary" style={{ marginTop: '20px' }}>
            Отправить ответы
          </Button>
        </Box>
      </form>

    </Container>
  );
};
