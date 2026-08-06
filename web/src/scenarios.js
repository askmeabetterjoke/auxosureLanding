export const SCENARIOS = {
  renewal: {
    id: 'renewal',
    label: 'Commercial Renewal',
    caller: 'Nicholas Chen',
    lines: [
      { role: 'auxo', text: 'Hi Nicholas! Your commercial policy is up for renewal in 45 days.' },
      { role: 'caller', text: 'Thanks — can you walk me through the changes?' },
      { role: 'auxo', text: "I've pre-filled the application with your current details. Premium is projected at $48,200 — up 4% YoY." },
      { role: 'caller', text: "That works. Let's proceed with the renewal." },
      { role: 'auxo', text: "Great. I'll send the packet to your underwriter and confirm by email." },
    ],
  },
  fnol: {
    id: 'fnol',
    label: 'FNOL Intake',
    caller: 'Maria Santos',
    lines: [
      { role: 'auxo', text: "I'm sorry to hear about the loss. Let me start a First Notice of Loss for you." },
      { role: 'caller', text: 'There was water damage at our warehouse on 5th Avenue.' },
      { role: 'auxo', text: 'Got it. Date of loss, approximate value, and any injuries to report?' },
      { role: 'caller', text: 'Yesterday evening. About $12,000. No injuries.' },
      { role: 'auxo', text: 'Claim #FN-28491 created. A adjuster will contact you within 2 hours.' },
    ],
  },
  quoting: {
    id: 'quoting',
    label: 'Quoting Triage',
    caller: 'James Okonkwo',
    lines: [
      { role: 'auxo', text: 'I can help triage this submission. What line of business are we quoting?' },
      { role: 'caller', text: 'General liability for a mid-market contractor, $5M revenue.' },
      { role: 'auxo', text: 'ACORD 125 received. Matching carriers with appetite for construction GL…' },
      { role: 'caller', text: 'Prefer Hartford or Travelers if possible.' },
      { role: 'auxo', text: 'Two markets flagged. Draft quote package ready for your review in the portal.' },
    ],
  },
};
