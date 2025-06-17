import React, { useState, KeyboardEvent, FormEvent } from 'react';
import { SendIcon } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-300 dark:border-gray-700 p-4 bg-white dark:bg-gray-800"
    >
      <div className="flex items-end space-x-2">
        <textarea
          className="flex-1 resize-none border border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
          placeholder="Type your message..."
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          style={{
            minHeight: '2.5rem',
            maxHeight: '8rem',
            height: 'auto',
          }}
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!message.trim() || isLoading}
        >
          <SendIcon size={20} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;