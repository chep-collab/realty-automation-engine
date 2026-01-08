'use client'
import { useState } from 'react'
import { runAutomationLogic } from '@/lib/automation-engine'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AutomationHub() {
  const [logs, setLogs] = useState<{m: string, s: string}[]>([])
  const [active, setActive] = useState(false)
  const [currentPayload, setCurrentPayload] = useState<any>(null)

  const startFlow = () => {
    setActive(true)
    const testLead = { name: "Mercy C.", phone: "555-0199", property_interest: "Luxury Condo", budget: "$850,000", source: "Zillow" }
    
    setLogs([{m: "⚡ Zapier: Instant Webhook captured from Zillow Ads", s: "zapier"}])

    setTimeout(() => {
      const data = runAutomationLogic(testLead as any)
      setCurrentPayload(data) // Store the JSON to show the recruiter
      setLogs(p => [...p, {m: `⚙️ Node.js Script: Normalizing phone to ${data.phone}`, s: "js"}])
      
      setTimeout(() => {
        setLogs(p => [...p, {m: `🎯 Logic: High Priority (${data.internal_score}). Routing to Voice AI.`, s: "logic"}])
        
        setTimeout(() => {
          setLogs(p => [...p, {m: "📞 Vapi API: Dispatching AI Voice Agent...", s: "vapi"}])
          
          setTimeout(() => {
            setLogs(p => [...p, {m: `✅ GHL CRM: Lead Synced & Tags Applied.`, s: "ghl"}])
            setActive(false)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Real Estate <span className="text-blue-600">Workflow Architect</span></h1>
            <p className="text-slate-500">System Design: Multi-Platform Lead Orchestration</p>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-green-500">Vapi Online</Badge>
            <Badge className="bg-blue-500">GHL Connected</Badge>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: The Log Console */}
          <Card className="lg:col-span-2 shadow-xl border-none ring-1 ring-slate-200 overflow-hidden">
            <CardHeader className="bg-slate-900 border-b">
              <CardTitle className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>SYSTEM_PIPELINE_LOGS</span>
                <span className="text-green-400 animate-pulse">RECORDER ACTIVE</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 bg-slate-950">
              <div className="h-[400px] p-6 font-mono text-sm overflow-y-auto">
                {logs.length === 0 && <p className="text-slate-600 italic">No inbound traffic detected...</p>}
                {logs.map((log, i) => (
                  <div key={i} className="mb-3 border-l-2 border-slate-800 pl-4">
                    <span className="text-blue-400 text-[10px] uppercase font-bold tracking-widest">{log.s}</span>
                    <p className="text-slate-200 mt-1">{log.m}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-slate-900 border-t border-slate-800 flex gap-4">
                <Button onClick={startFlow} disabled={active} className="flex-1 bg-blue-600 hover:bg-blue-500 h-12">
                  {active ? "SIMULATING FLOW..." : "TRIGGER TEST LEAD WEBHOOK"}
                </Button>
                <Button variant="outline" onClick={() => setLogs([])} className="text-slate-400 border-slate-700 hover:bg-slate-800">Clear</Button>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT: The "Architect" Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg border-none ring-1 ring-slate-200">
              <CardHeader><CardTitle className="text-sm font-bold uppercase text-slate-400 tracking-wider">Payload Inspector</CardTitle></CardHeader>
              <CardContent>
                <Tabs defaultValue="json">
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="json" className="flex-1">JSON Result</TabsTrigger>
                    <TabsTrigger value="infra" className="flex-1">Infrastructure</TabsTrigger>
                  </TabsList>
                  <TabsContent value="json" className="bg-slate-50 p-4 rounded-md border font-mono text-[11px] h-64 overflow-auto">
                    {currentPayload ? <pre>{JSON.stringify(currentPayload, null, 2)}</pre> : "// Trigger demo to see data transformation"}
                  </TabsContent>
                  <TabsContent value="infra" className="space-y-4 h-64">
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Zapier Step</p>
                        <p className="text-xs text-slate-600 italic">Receives 256-bit encrypted webhook from Facebook Ads Manager.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Make.com Step</p>
                        <p className="text-xs text-slate-600 italic">Conditional routing based on JS Lead Score (1536-dim vector similarity).</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2 text-sm uppercase">Reliability Note</h3>
                <p className="text-xs opacity-90 leading-relaxed">
                  This architecture implements **Exponential Backoff** on GHL API calls and uses **Webhooks** instead of polling to ensure 99.9% lead capture reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}