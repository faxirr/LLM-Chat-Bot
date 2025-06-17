import { useEffect, useRef } from 'react';
import type { Message } from '../types';
import { default as ReactMarkdown } from 'react-markdown';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Start a conversation by typing a message below.
              </p>
            </div>
        )}

        {messages.map((message) => (
            <div
                key={message.id}
                className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-lg px-4 py-2 ${
                      message.role === 'user'
                          ? 'bg-yellow-500 text-black'
                          : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
                  }`}
              >
                {message.role === 'assistant' ? (
                    <div className="prose dark:prose-invert prose-sm sm:prose-base max-w-none">
                      <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                            ul: ({ children }) => <ul className="mb-3 space-y-1">{children}</ul>,
                            ol: ({ children }) => <ol className="mb-3 space-y-1">{children}</ol>,
                            li: ({ children }) => <li className="ml-4">{children}</li>,
                            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                            h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-sm font-bold mb-2">{children}</h3>,
                          }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                ) : (
                    <div className="whitespace-pre-wrap">
                      {message.content}
                    </div>
                )}
                <div
                    className={`text-xs mt-2 ${
                        message.role === 'user'
                            ? 'text-yellow-800 dark:text-yellow-200'
                            : 'text-gray-500 dark:text-gray-400'
                    }`}
                >
                  {formatTimestamp(message.timestamp)}
                </div>
              </div>
            </div>
        ))}

        {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] md:max-w-[70%] rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-700">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
        )}

        <div ref={messagesEndRef} />
      </div>
  );
};

export default MessageList;