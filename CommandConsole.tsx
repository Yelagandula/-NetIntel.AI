import React, { useState } from 'react';
import { Terminal, Send, History } from 'lucide-react';

const CommandConsole: React.FC = () => {
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([
    'agent deploy --model gpt-4 --task research',
    'vpn connect --node eu-west',
    'security rotate-tokens --scope api',
    'monitor --metrics system --interval 30s'
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      setCommandHistory(prev => [command, ...prev.slice(0, 9)]);
      setCommand('');
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
      <div className="flex items-center space-x-3 p-6 border-b border-slate-700/50">
        <div className="p-2 bg-slate-700/50 rounded-lg">
          <Terminal className="h-5 w-5 text-slate-400" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Command Console</h3>
          <p className="text-sm text-slate-400">Agent orchestration interface</p>
        </div>
      </div>
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Enter agent command..."
                className="w-full bg-slate-900/50 border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Execute</span>
            </button>
          </div>
        </form>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 mb-3">
            <History className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-400">Command History</span>
          </div>
          {commandHistory.map((cmd, index) => (
            <div
              key={index}
              className="p-3 bg-slate-900/30 rounded-lg font-mono text-sm text-slate-300 hover:bg-slate-900/50 transition-colors cursor-pointer"
              onClick={() => setCommand(cmd)}
            >
              <span className="text-green-400">$</span> {cmd}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandConsole;