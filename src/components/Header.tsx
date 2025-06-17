import React, { useState } from 'react';
import { Settings, Sun, Moon, Trash2 } from 'lucide-react';
import { AppConfig } from '../types';

interface HeaderProps {
  config: AppConfig;
  updateConfig: (config: Partial<AppConfig>) => void;
  clearChat: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  config, 
  updateConfig, 
  clearChat,
  isDarkMode,
  toggleDarkMode
}) => {
  const [showSettings, setShowSettings] = useState(false);
  
  const handleSaveConfig = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    updateConfig({
      apiKey: formData.get('apiKey') as string,
      systemPrompt: formData.get('systemPrompt') as string,
      modelName: formData.get('modelName') as string,
      maxRetries: parseInt(formData.get('maxRetries') as string, 10),
      retryDelay: parseInt(formData.get('retryDelay') as string, 10),
    });
    
    setShowSettings(false);
  };

  return (
    <header className="bg-yellow-500 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">College AI Assistant</h1>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-yellow-600 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={clearChat}
            className="p-2 rounded-full hover:bg-yellow-600 transition-colors"
            aria-label="Clear chat"
          >
            <Trash2 size={20} />
          </button>
          
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-full hover:bg-yellow-600 transition-colors"
            aria-label="Settings"
          >
            <Settings size={20} />
          </button>
        </div>
      </div>
      
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Settings</h2>
            
            <form onSubmit={handleSaveConfig}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Google AI API Key
                  </label>
                  <input
                    type="password"
                    name="apiKey"
                    id="apiKey"
                    defaultValue={config.apiKey}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your API key"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="modelName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Model Name
                  </label>
                  <select
                    name="modelName"
                    id="modelName"
                    defaultValue={config.modelName}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
                    <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
                    <option value="gemini-1.0-pro">Gemini 1.0 Pro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="systemPrompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    System Prompt
                  </label>
                  <textarea
                    name="systemPrompt"
                    id="systemPrompt"
                    rows={4}
                    defaultValue={config.systemPrompt}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter system prompt"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="maxRetries" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Max Retries
                    </label>
                    <input
                      type="number"
                      name="maxRetries"
                      id="maxRetries"
                      min="1"
                      max="10"
                      defaultValue={config.maxRetries}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="retryDelay" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Retry Delay (ms)
                    </label>
                    <input
                      type="number"
                      name="retryDelay"
                      id="retryDelay"
                      min="500"
                      step="500"
                      defaultValue={config.retryDelay}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;