import React from 'react';
import { Server, Clock, Activity } from 'lucide-react';
import { APIEndpoint } from '../types';

interface APIEndpointCardProps {
  endpoint: APIEndpoint;
}

const APIEndpointCard: React.FC<APIEndpointCardProps> = ({ endpoint }) => {
  const statusColors = {
    healthy: 'bg-green-500/20 text-green-400 border-green-500/30',
    degraded: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    unhealthy: 'bg-red-500/20 text-red-400 border-red-500/30'
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-500/20 rounded-lg">
            <Server className="h-5 w-5 text-orange-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{endpoint.name}</h3>
            <code className="text-sm text-slate-400">{endpoint.url}</code>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${statusColors[endpoint.status]}`}>
          {endpoint.status === 'healthy' && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block mr-2"></div>}
          {endpoint.status.toUpperCase()}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <Clock className="h-4 w-4" />
            <span>Response Time</span>
          </div>
          <span className="text-white">{endpoint.responseTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <Activity className="h-4 w-4" />
            <span>Total Requests</span>
          </div>
          <span className="text-white font-medium">{endpoint.requests.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Last Check</span>
          <span className="text-white">{endpoint.lastCheck}</span>
        </div>
      </div>
    </div>
  );
};

export default APIEndpointCard;