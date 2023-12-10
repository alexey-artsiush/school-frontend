import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ChatMessage } from '@/features/ChatGPTSupport/ui/MessageCard/MessageCard';
import { SendMessage } from '@/features/ChatGPTSupport/ui/SendMessage/SendMessage';
import { sendMessage } from '@/features/ChatGPTSupport/model/services/chat/chat';
import { getChatErrorState, getChatInfo } from '@/features/ChatGPTSupport';

export const Chat: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const chatData = useSelector(getChatInfo);
  const chatError = useSelector(getChatErrorState);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = async (message: string) => {
    try {
      dispatch(sendMessage(message));
      setMessage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Scroll down in case new message
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatData]);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 112px)', width: '80%', margin: 'auto', maxWidth: '800px',
    }}
    >
      <div
        ref={chatContainerRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: '10px',
          padding: '10px',
          borderBottom: '1px solid #ccc',
        }}
      >
        {chatData.map((entry, index) => (
          <ChatMessage key={index} author={entry.author} message={entry.message} />
        ))}
      </div>

      <SendMessage onSendMessage={handleSendMessage} />

    </div>
  );
};
