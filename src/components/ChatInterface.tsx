ч'import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Header from './Header';
import { useChat } from '../hooks/useChat';

const ChatInterface: React.FC = () => {
  const { 
    messages, 
    isLoading, 
    error, 
    config, 
    sendMessage, 
    clearChat, 
    updateConfig 
  } = useChat();
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode 
      ? savedMode === 'true' 
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save dark mode preference
    localStorage.setItem('darkMode', isDarkMode.toString());
    
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header
        config={config}
        updateConfig={updateConfig}
        clearChat={clearChat}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-4\" role="alert">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}
        
        {!config.apiKey && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 m-4" role="alert">
            <p className="font-bold">API Key Required</p>
            <p>Please set your Google AI API key in the settings (click the gear icon).</p>
          </div>
        )}
        
        <MessageList messages={messages} isLoading={isLoading} />
        <MessageInput onSendMessage={sendMessage} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default ChatInterface;