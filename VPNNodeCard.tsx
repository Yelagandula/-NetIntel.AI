import React from 'react';
import { Globe, Wifi, Zap } from 'lucide-react';
import { VPNNode } from '../types';

interface VPNNodeCardProps {
  node: VPNNode;
}

const VPNNodeCard: React.FC<VPNNodeCardProps> = ({ node }) => {
  const statusColors = {
    connected: 'bg-green-500/20 text-green-400 border-green-500/30',
    disconnected: 'bg-red-500/20 text-red-400 border-red-500/30',
    connecting: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-teal-500/20 rounded-lg">
            <Globe className="h-5 w-5 text-teal-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{node.name}</h3>
            <p className="text-sm text-slate-400">{node.location}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${statusColors[node.status]}`}>
          {node.status === 'connected' && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block mr-2"></div>}
          {node.status === 'connecting' && <div className="w-2 h-2 bg-yellow-400 rounded-full animate-spin inline-block mr-2"></div>}
          {node.status.toUpperCase()}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">IP Address</span>
          <code className="text-white bg-slate-700/50 px-2 py-1 rounded text-xs">{node.ip}</code>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <Wifi className="h-4 w-4" />
            <span>Latency</span>
          </div>
          <span className="text-white">{node.latency}ms</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <Zap className="h-4 w-4" />
            <span>Throughput</span>
          </div>
          <span className="text-white">{node.throughput.toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default VPNNodeCard;