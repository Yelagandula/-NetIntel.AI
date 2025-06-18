import React from 'react';
import { Cpu, MemoryStick, Network, Users } from 'lucide-react';
import Header from './components/Header';
import MetricsCard from './components/MetricsCard';
import AgentCard from './components/AgentCard';
import VPNNodeCard from './components/VPNNodeCard';
import APIEndpointCard from './components/APIEndpointCard';
import ActivityLog from './components/ActivityLog';
import CommandConsole from './components/CommandConsole';
import { useSimulatedData } from './hooks/useSimulatedData';

function App() {
  const { agents, vpnNodes, apiEndpoints, logs, metrics } = useSimulatedData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <main className="p-6 space-y-8">
        {/* System Metrics */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">System Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricsCard
              title="CPU Usage"
              value={`${metrics.cpuUsage.toFixed(1)}%`}
              icon={Cpu}
              color="blue"
            />
            <MetricsCard
              title="Memory Usage"
              value={`${metrics.memoryUsage.toFixed(1)}%`}
              icon={MemoryStick}
              color="green"
            />
            <MetricsCard
              title="Network Throughput"
              value={`${metrics.networkThroughput.toFixed(1)} MB/s`}
              icon={Network}
              color="orange"
            />
            <MetricsCard
              title="Active Connections"
              value={metrics.activeConnections}
              icon={Users}
              color="red"
            />
          </div>
        </section>

        {/* Agent Management */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">LLM Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        {/* VPN Mesh Network */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">VPN Mesh Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vpnNodes.map((node) => (
              <VPNNodeCard key={node.id} node={node} />
            ))}
          </div>
        </section>

        {/* API Endpoints */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">API Endpoints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiEndpoints.map((endpoint) => (
              <APIEndpointCard key={endpoint.id} endpoint={endpoint} />
            ))}
          </div>
        </section>

        {/* Activity Log and Command Console */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ActivityLog logs={logs} />
            <CommandConsole />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;