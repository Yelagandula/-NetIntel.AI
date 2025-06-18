import React from 'react';
import { Terminal, Info, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';
import { LogEntry } from '../types';

interface ActivityLogProps {
  logs: LogEntry[];
}

const ActivityLog: React.FC<ActivityLogProps> = ({ logs }) => {
  const getLogIcon = (level: LogEntry['level']) => {
    switch (level) {
      case 'info':
        return Info;
      case 'warning':
        return AlertTriangle;
      case 'error':
        return XCircle;
      case 'success':
        return CheckCircle;
      default:
        return Info;
    }
  };

  const getLogColor = (level: LogEntry['level']) => {
    switch (level) {
      case 'info':
        return 'text-blue-400';
      case 'warning':
        return 'text-yellow-400';
      case 'error':
        return 'text-red-400';
      case 'success':
        return 'text-green-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
      <div className="flex items-center space-x-3 p-6 border-b border-slate-700/50">
        <div className="p-2 bg-slate-700/50 rounded-lg">
          <Terminal className="h-5 w-5 text-slate-400" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Activity Log</h3>
          <p className="text-sm text-slate-400">Real-time system events</p>
        </div>
        <div className="flex-1"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
        {logs.map((log) => {
          const Icon = getLogIcon(log.level);
          return (
            <div key={log.id} className="flex items-start space-x-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors">
              <Icon className={`h-4 w-4 mt-0.5 ${getLogColor(log.level)}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-white">{log.source}</span>
                  <span className="text-xs text-slate-400">
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-1">{log.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityLog;