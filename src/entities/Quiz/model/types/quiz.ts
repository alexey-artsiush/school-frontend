export interface QuizSchema {
  isLoading: boolean
  isError: boolean
  error: undefined | string
  quiz: any // заменить на нормальное значение
}

export interface QuizGetResponse {
  success: boolean
  data: any // заменить на нормальное значение
}
