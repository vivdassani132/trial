import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Check, X as XIcon } from 'lucide-react';

const FeatureItem: React.FC<{ label: string; included?: boolean }> = ({ label, included = true }) => (
    <div className="flex items-start gap-3 py-2">
        {included ? (
            <div className="mt-0.5 rounded-full bg-[#E94E35] p-0.5">
                <Check size={10} className="text-white stroke-[3]" />
            </div>
        ) : (
             <div className="mt-0.5 rounded-full bg-black/10 p-0.5">
                <XIcon size={10} className="text-white stroke-[3]" />
            </div>
        )}
        <span className={`text-sm ${included ? 'text-black' : 'text-text-muted'}`}>{label}</span>
    </div>
);

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Container>
        <div className="text-center mb-16 md:mb-24">
            <h1 className="text-5xl md:text-7xl font-medium text-text-main mb-6 tracking-tight">Pricing</h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Use Linear for free with your whole team. Upgrade to enable unlimited issues, enhanced security controls, and additional features.
            </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {/* Free */}
            <div className="p-8 rounded-2xl border border-black/10 bg-surface flex flex-col h-full hover:border-black/20 transition-colors">
                <h3 className="text-2xl font-medium text-black mb-2">Free</h3>
                <div className="text-4xl font-medium text-black mb-1">$0</div>
                <div className="text-sm text-text-muted mb-8 h-6">Free for everyone</div>
                
                <Button variant="secondary" className="w-full mb-8">Get started</Button>

                <div className="space-y-1">
                    <FeatureItem label="Unlimited members" />
                    <FeatureItem label="2 teams" />
                    <FeatureItem label="250 issues" />
                    <FeatureItem label="Slack and GitHub" />
                    <FeatureItem label="AI agents" />
                </div>
            </div>

            {/* Basic */}
            <div className="p-8 rounded-2xl border border-black/10 bg-surface flex flex-col h-full hover:border-black/20 transition-colors">
                <h3 className="text-2xl font-medium text-black mb-2">Basic</h3>
                <div className="text-4xl font-medium text-black mb-1">$8<span className="text-lg text-text-muted font-normal">/mo</span></div>
                <div className="text-sm text-text-muted mb-8 h-6 flex items-center gap-2">
                    per user/month
                </div>

                <Button variant="secondary" className="w-full mb-8">Get started</Button>

                <div className="space-y-1">
                    <FeatureItem label="All Free features +" />
                    <FeatureItem label="5 teams" />
                    <FeatureItem label="Unlimited issues" />
                    <FeatureItem label="Unlimited file uploads" />
                    <FeatureItem label="Admin roles" />
                </div>
            </div>

            {/* Business */}
            <div className="p-8 rounded-2xl border border-[#E94E35]/30 bg-[#FFF5F3] flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-[#E94E35]"></div>
                <h3 className="text-2xl font-medium text-black mb-2">Business</h3>
                <div className="text-4xl font-medium text-black mb-1">$15<span className="text-lg text-text-muted font-normal">/mo</span></div>
                <div className="text-sm text-text-muted mb-8 h-6 flex items-center gap-2">
                     per user/month
                </div>

                <Button className="w-full mb-8 bg-[#E94E35] hover:bg-[#d4432d] border-transparent text-white">Get started</Button>

                <div className="space-y-1">
                    <FeatureItem label="All Basic features +" />
                    <FeatureItem label="Unlimited teams" />
                    <FeatureItem label="Private teams and guests" />
                    <FeatureItem label="Triage Intelligence" />
                    <FeatureItem label="Linear Insights" />
                    <FeatureItem label="Linear Asks" />
                </div>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl border border-black/10 bg-surface flex flex-col h-full hover:border-black/20 transition-colors">
                <h3 className="text-2xl font-medium text-black mb-2">Enterprise</h3>
                <div className="text-4xl font-medium text-black mb-1">Contact us</div>
                <div className="text-sm text-text-muted mb-8 h-6">Annual billing only</div>

                <Button variant="secondary" className="w-full mb-8">Request trial</Button>

                <div className="space-y-1">
                    <FeatureItem label="All Business features +" />
                    <FeatureItem label="Sub-initiatives" />
                    <FeatureItem label="Advanced Linear Asks" />
                    <FeatureItem label="Dashboards" />
                    <FeatureItem label="SAML and SCIM" />
                    <FeatureItem label="Advanced security" />
                </div>
            </div>
        </div>

        {/* Feature Comparison Tables */}
        <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Core Features */}
            <div>
                <h3 className="text-xl font-medium text-black mb-6 border-b border-black/5 pb-2">Core features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                     <FeatureItem label="Issues, projects, cycles, and initiatives" />
                     <FeatureItem label="Customer requests" />
                     <FeatureItem label="API and webhook access" />
                     <FeatureItem label="Import and export" />
                     <FeatureItem label="Triage" />
                     <FeatureItem label="Pulse" />
                     <FeatureItem label="Issue sync" />
                </div>
            </div>

            {/* AI */}
             <div>
                <h3 className="text-xl font-medium text-black mb-6 border-b border-black/5 pb-2">Artificial intelligence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                     <FeatureItem label="Agent platform" />
                     <FeatureItem label="MCP access" />
                     <FeatureItem label="Triage Intelligence" />
                     <FeatureItem label="Issue discussion summaries" />
                     <FeatureItem label="Linear Agent for Slack" />
                </div>
            </div>

             {/* Team Management */}
             <div>
                <h3 className="text-xl font-medium text-black mb-6 border-b border-black/5 pb-2">Team management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                     <FeatureItem label="Sub-teams" />
                     <FeatureItem label="Private teams" />
                     <FeatureItem label="Guest accounts" />
                </div>
            </div>

            {/* Security */}
             <div>
                <h3 className="text-xl font-medium text-black mb-6 border-b border-black/5 pb-2">Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                     <FeatureItem label="Google SSO" />
                     <FeatureItem label="Admin roles" />
                     <FeatureItem label="Advanced authentication" />
                     <FeatureItem label="IP restrictions" />
                     <FeatureItem label="SCIM provisioning" />
                     <FeatureItem label="Domain claiming" />
                     <FeatureItem label="Audit log" />
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};