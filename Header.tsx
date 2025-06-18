import React from 'react';
import { Shield, Zap, Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Shield className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">LLM Agent Orchestration</h1>
            <p className="text-sm text-slate-400">Secure VPN Mesh Network Platform</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-medium">System Online</span>
          </div>
          
          <div className="flex items-center space-x-2 px-3 py-1 bg-blue-500/20 rounded-full">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">JWT Active</span>
          </div>
          
          <div className="flex items-center space-x-2 px-3 py-1 bg-orange-500/20 rounded-full">
            <Activity className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">3 Agents</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;