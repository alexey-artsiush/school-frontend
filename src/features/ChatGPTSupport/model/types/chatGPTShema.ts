export interface ChatGPTShema {
  messages: Message[] | null;
  isLoading: boolean;
  error?: boolean;
}

export interface Message {
  author: string,
  message: string
}
