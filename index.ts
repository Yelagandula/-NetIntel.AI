export interface Agent {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'error' | 'offline';
  lastActivity: string;
  tasksCompleted: number;
  model: string;
}

export interface VPNNode {
  id: string;
  name: string;
  ip: string;
  status: 'connected' | 'disconnected' | 'connecting';
  latency: number;
  location: string;
  throughput: number;
}

export interface APIEndpoint {
  id: string;
  name: string;
  url: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  responseTime: number;
  lastCheck: string;
  requests: number;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error' | 'success';
  source: string;
  message: string;
}

export interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  networkThroughput: number;
  activeConnections: number;
}