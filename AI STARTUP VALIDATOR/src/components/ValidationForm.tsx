import React, { useState } from 'react';
import { Send, Brain } from 'lucide-react';

interface Props {
  onSubmit: (idea: string) => Promise<void>;
  loading: boolean;
}

export default function ValidationForm({ onSubmit, loading }: Props) {
  const [businessIdea, setBusinessIdea] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessIdea.trim()) return;
    await onSubmit(businessIdea);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-blue-400" />
          <span className="text-gray-400">Describe your idea in detail</span>
        </div>
        <textarea
          value={businessIdea}
          onChange={(e) => setBusinessIdea(e.target.value)}
          placeholder="Enter your startup idea here... Be as detailed as possible for better analysis."
          className="w-full h-40 bg-white/5 text-white border-0 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none placeholder-gray-500"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !businessIdea.trim()}
          className="absolute bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
        >
          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
}