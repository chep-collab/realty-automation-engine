# Real Estate AI Automation & Integration Hub

A high-performance lead orchestration engine designed to bridge **Zapier**, **Make.com**, **GoHighLevel (GHL)**, and **Voice AI (Vapi)**. This project serves as a technical demonstration of the workflow automation and integration expertise mentioned on my CV.

**Live Demo:** [PASTE YOUR VERCEL LINK HERE]

## 🏗️ Architecture Overview

This system acts as a middleware "Logic Engine" that processes incoming real estate leads and determines the optimal engagement path based on lead value and intent.



### Integration Stack
* **Trigger Layer:** Zapier (simulated) - Handles instant webhook ingestion from platforms like Zillow and Facebook Ads.
* **Logic Layer:** Node.js/TypeScript - Executes custom data transformation, sanitization, and priority scoring.
* **Orchestration Layer:** Make.com - Manages complex branching and multi-service handshakes.
* **Action Layer:** Vapi & Retail AI - Dispatches outbound Voice AI agents for high-priority lead follow-up.
* **Data Layer:** GoHighLevel (GHL) - Final CRM destination for contact sync, tagging, and nurture pipelines.

## 🚀 Key Features (Reflected in Demo)

### 1. Webhook Ingestion & Data Transformation
- Implemented logic to sanitize messy "Real World" data (e.g., stripping non-numeric characters from phone numbers and converting to E.164 format).
- **Why?** Ensures downstream APIs like Vapi and GHL never fail due to malformed payloads.

### 2. Conditional Routing & Lead Scoring
- Custom Node.js script calculates a "Priority Score" based on property budget and lead source.
- High-intent leads are routed to **Voice AI** for immediate dispatch, while standard leads are routed to **GHL SMS** nurture flows.

### 3. API-to-API Communication Patterns
- Uses a "Payload Inspector" to allow for real-time auditing of JSON structures.
- Designed with **RESTful API best practices** in mind, including structured error handling and simulation of exponential backoff for reliability.

## 🛠️ Technical Implementation

### Custom Logic Snippet (Node.js/TypeScript)
```typescript
// Example of the logic used to "supercharge" low-code tools
export function processLead(lead) {
  const isHighPriority = parseInt(lead.budget.replace(/\D/g, '')) >= 750000;
  return {
    status: isHighPriority ? "HOT_LEAD" : "NURTURE",
    next_step: isHighPriority ? "TRIGGER_VAPI" : "GHL_SMS_NURTURE"
  };
}
📈 Business Impact
Reduced Lead Response Time: By automating the Vapi trigger, the lead is contacted in <1 min.

Operational Savings: Conditional routing prevents expensive AI credits from being spent on low-quality leads.

Data Integrity: Centralized GHL tagging ensures the sales team has perfect visibility into the AI's actions.

Developed by Mercy Chepng’eno Focused on Workflow Automation, Integration Engineering, and AI Scaling.
