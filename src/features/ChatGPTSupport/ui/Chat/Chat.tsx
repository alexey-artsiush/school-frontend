import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ChatMessage } from '@/features/ChatGPTSupport/ui/MessageCard/MessageCard';
import { SendMessage } from '@/features/ChatGPTSupport/ui/SendMessage/SendMessage';
import { sendMessage } from '@/features/ChatGPTSupport/model/services/chat/chat';
import { getChatInfo } from '@/features/ChatGPTSupport';
import { useAppDispatch } from '@/app/providers/StoreProvider';

export const Chat: React.FC = () => {
  const dispatch = useAppDispatch();

  const chatData = useSelector(getChatInfo);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-shadow
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
      display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 125px)', width: '80%', margin: 'auto', maxWidth: '800px',
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
        {chatData && chatData.map((entry) => (
          <ChatMessage key={entry.message} author={entry.author} message={entry.message} />
        ))}
      </div>

      <SendMessage onSendMessage={handleSendMessage} />

    </div>
  );
};
