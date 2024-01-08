import { Avatar, Typography, useTheme } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface ChatMessageProps {
  author: string;
  message: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ author, message }) => {
  const theme = useTheme();
  const isChatBot = author === 'Chatbot';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: isChatBot ? 'row-reverse' : 'row',
      margin: isChatBot ? '0 0 30px 15px' : '0 15px 30px 0',
    }}
    >
      {!isChatBot ? (
        <Avatar color="primary" style={{ marginRight: '8px', backgroundColor: theme.palette.primary.main }} />
      ) : (
        <Avatar style={{ marginRight: '8px', backgroundColor: theme.palette.primary.light }}>
          <SupportAgentIcon />
        </Avatar>
      )}
      <div style={{ margin: '-1px 5px 0' }}>
        <Typography variant="body2" style={{ fontWeight: 'bold', textAlign: isChatBot ? 'end' : 'start' }}>
          {author}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
          {message}
        </Typography>
      </div>
    </div>
  );
};
