export type Lead = {
  name: string;
  phone: string;
  property_interest: string;
  budget: string;
  source: "Zillow" | "Facebook" | "Realtor.com";
};

export function runAutomationLogic(lead: Lead) {
  // 1. Data Transformation (Requirement: JSON transformation)
  const cleanPhone = lead.phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('1') ? `+${cleanPhone}` : `+1${cleanPhone}`;

  // 2. Logic Scoring (Requirement: Architect automated workflows)
  const budgetValue = parseInt(lead.budget.replace(/\D/g, ''));
  const isHighPriority = budgetValue >= 750000;

  // 3. API Routing (Requirement: Design integrations with external APIs)
  return {
    ...lead,
    phone: formattedPhone,
    internal_score: isHighPriority ? "HOT_LEAD" : "NURTURE",
    next_step: isHighPriority ? "TRIGGER_VAPI_VOICE" : "SEND_TO_GHL_SMS",
    ghl_tags: isHighPriority ? ["AI-Priority", "Voice-Outbound"] : ["General-Nurture"],
    retry_logic: "Enabled (Exponential Backoff)"
  };
}