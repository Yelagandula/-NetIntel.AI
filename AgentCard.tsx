import React from 'react';
import { Bot, Clock, CheckCircle } from 'lucide-react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const statusColors = {
    active: 'bg-green-500/20 text-green-400 border-green-500/30',
    idle: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    error: 'bg-red-500/20 text-red-400 border-red-500/30',
    offline: 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Bot className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{agent.name}</h3>
            <p className="text-sm text-slate-400">{agent.model}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${statusColors[agent.status]}`}>
          {agent.status === 'active' && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block mr-2"></div>}
          {agent.status.toUpperCase()}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <Clock className="h-4 w-4" />
            <span>Last Activity</span>
          </div>
          <span className="text-white">{agent.lastActivity}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <CheckCircle className="h-4 w-4" />
            <span>Tasks Completed</span>
          </div>
          <span className="text-white font-medium">{agent.tasksCompleted}</span>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;