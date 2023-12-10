// @ts-nocheck

import React, { useState } from 'react';
import {
  Button, CircularProgress, InputAdornment, TextField,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { getChatLoadingState } from '@/features/ChatGPTSupport';

interface ChatInputFormProps {
  onSendMessage: (message: string) => void;
}

export const SendMessage: React.FC<ChatInputFormProps> = ({ onSendMessage }) => {
  const { t } = useTranslation();
  const chatLoading = useSelector(getChatLoadingState);

  const [message, setMessage] = useState<string>('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <TextField
      label={t('Enter message')}
      variant="outlined"
      fullWidth
      multiline
      rowsMax={4}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ height: '100%', margin: 'auto 0 0 auto' }}>
            <Button variant="contained" onClick={handleSendMessage} disabled={chatLoading}>
              {chatLoading ? <CircularProgress /> : <SendIcon />}
            </Button>
          </InputAdornment>
        ),
      }}
      style={{ marginBottom: '10px' }}
    />
  );
};
