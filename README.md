# -NetIntel.AI
NetIntel.AI is a proof-of-concept platform built to demonstrate secure integration between LLM-based agents (e.g., OpenAI) and remote inference servers. It simulates how autonomous agents can interact with private infrastructure using a secure, lightweight networking layer.


# NetIntel.AI – Secure Agent Orchestration Platform

> ⚡️ Proof-of-concept framework to securely connect autonomous LLM agents to remote inference servers through a lightweight, simulated VPN mesh.

---

## 🌐 Overview

**NetIntel.AI** demonstrates secure orchestration of LLM-based agents (e.g., GPT-4, Claude, Llama) across remote cloud inference environments. It uses a simulated mesh VPN (WireGuard-based) to route agent commands via a secure backend, visualized through an interactive dashboard.

---

## 📸 Dashboard Preview

### VPN Mesh & API Endpoints

![VPN Mesh and API Status](/assets/screenshots/screenshot_1.jpg)
![Screenshot 2025-06-18 170906](https://github.com/user-attachments/assets/233add04-9ee8-44f9-a48a-8209c25410c1)


- **Mesh Gateways** across US, EU, and APAC regions with real-time latency and throughput monitoring.
- API health indicators and detailed response statistics for:
  - Agent Orchestrator
  - VPN Gateway
  - Inference Engine

---

### Activity Console & Command Interface

![Command Console & Agent Log](/assets/screenshots/screenshot_2.jpg)
![Screenshot 2025-06-18 170848](https://github.com/user-attachments/assets/67a8f054-3778-4c8a-a005-528727ef8e9c)

- **Command Console** to execute agent commands like:
  ```bash
  agent deploy --model gpt-4 --task research
  vpn connect --node eu-west
  monitor --metrics system --interval 30s
