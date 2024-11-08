import React, { useState } from 'react';
import { Send, Mic } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Voice input"
      >
        <Mic className="w-5 h-5 text-gray-600" />
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your health question..."
        className="flex-1 rounded-full border border-gray-200 py-2 px-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
      />
      
      <button
        type="submit"
        disabled={!message.trim()}
        className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Send message"
      >
        <Send className="w-5 h-5 text-white" />
      </button>
    </form>
  );
}