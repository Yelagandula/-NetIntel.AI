import { useState, useEffect } from 'react';
import { Agent, VPNNode, APIEndpoint, LogEntry, SystemMetrics } from '../types';

export const useSimulatedData = () => {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'Research Agent Alpha',
      status: 'active',
      lastActivity: '2 minutes ago',
      tasksCompleted: 127,
      model: 'GPT-4'
    },
    {
      id: '2',
      name: 'Analysis Agent Beta',
      status: 'idle',
      lastActivity: '15 minutes ago',
      tasksCompleted: 89,
      model: 'Claude-3'
    },
    {
      id: '3',
      name: 'Inference Agent Gamma',
      status: 'active',
      lastActivity: '1 minute ago',
      tasksCompleted: 203,
      model: 'Llama-2'
    }
  ]);

  const [vpnNodes, setVpnNodes] = useState<VPNNode[]>([
    {
      id: '1',
      name: 'Gateway-US-East',
      ip: '10.0.1.1',
      status: 'connected',
      latency: 12,
      location: 'Virginia',
      throughput: 98.5
    },
    {
      id: '2',
      name: 'Gateway-EU-West',
      ip: '10.0.1.2',
      status: 'connected',
      latency: 45,
      location: 'Ireland',
      throughput: 87.2
    },
    {
      id: '3',
      name: 'Gateway-APAC',
      ip: '10.0.1.3',
      status: 'connecting',
      latency: 89,
      location: 'Singapore',
      throughput: 0
    }
  ]);

  const [apiEndpoints, setApiEndpoints] = useState<APIEndpoint[]>([
    {
      id: '1',
      name: 'Agent Orchestrator',
      url: '/api/v1/agents',
      status: 'healthy',
      responseTime: 42,
      lastCheck: '30s ago',
      requests: 1247
    },
    {
      id: '2',
      name: 'VPN Gateway',
      url: '/api/v1/vpn',
      status: 'healthy',
      responseTime: 18,
      lastCheck: '15s ago',
      requests: 892
    },
    {
      id: '3',
      name: 'Inference Engine',
      url: '/api/v1/inference',
      status: 'degraded',
      responseTime: 156,
      lastCheck: '1m ago',
      requests: 2103
    }
  ]);

  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      timestamp: new Date().toISOString(),
      level: 'info',
      source: 'Agent-Alpha',
      message: 'Starting inference task for research query'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 60000).toISOString(),
      level: 'success',
      source: 'VPN-Gateway',
      message: 'Secure tunnel established to EU-West node'
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 120000).toISOString(),
      level: 'warning',
      source: 'API-Monitor',
      message: 'Inference engine response time increased to 156ms'
    }
  ]);

  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpuUsage: 45,
    memoryUsage: 62,
    networkThroughput: 156.7,
    activeConnections: 23
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics
      setMetrics(prev => ({
        cpuUsage: Math.max(0, Math.min(100, prev.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(0, Math.min(100, prev.memoryUsage + (Math.random() - 0.5) * 5)),
        networkThroughput: Math.max(0, prev.networkThroughput + (Math.random() - 0.5) * 20),
        activeConnections: Math.max(0, prev.activeConnections + Math.floor((Math.random() - 0.5) * 3))
      }));

      // Occasionally add new logs
      if (Math.random() < 0.3) {
        const newLog: LogEntry = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          level: ['info', 'success', 'warning'][Math.floor(Math.random() * 3)] as LogEntry['level'],
          source: ['Agent-Alpha', 'Agent-Beta', 'VPN-Gateway', 'API-Monitor'][Math.floor(Math.random() * 4)],
          message: [
            'Processing inference request',
            'VPN tunnel health check completed',
            'Agent task completed successfully',
            'Security token refreshed',
            'Network latency within normal parameters'
          ][Math.floor(Math.random() * 5)]
        };
        
        setLogs(prev => [newLog, ...prev.slice(0, 9)]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return {
    agents,
    vpnNodes,
    apiEndpoints,
    logs,
    metrics
  };
};