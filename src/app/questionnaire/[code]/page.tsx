"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Building2, User, Wrench, Target, Wallet, ArrowRight,
    ArrowLeft, CheckCircle2, ChevronRight, Check
} from "lucide-react";

// --- Types & Data ---

type StepId = 1 | 2 | 3 | 4 | 5 | 6;

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    job_title: string;
    industry: string;
    company_size: string;
    years_in_business: string;
    website: string;
    current_tools: string[];
    satisfaction: number; // 1-5
    pain_points: string[];
    goals: string[];
    timeline: string;
    budget_range: string;
    additional_notes: string;
}

const INITIAL_DATA: FormData = {
    name: "", email: "", phone: "", company: "", job_title: "",
    industry: "", company_size: "", years_in_business: "", website: "",
    current_tools: [], satisfaction: 3, pain_points: [], goals: [],
    timeline: "", budget_range: "", additional_notes: ""
};

const INDUSTRIES = ["Technology", "Healthcare", "Finance", "Retail", "Manufacturing", "Real Estate", "Professional Services", "Logistics & Shipping", "E-commerce", "Construction", "Food & Beverage", "Education", "Automotive", "Other"];
const SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];
const TIMELINES = ["Immediately", "1-3 months", "3-6 months", "6+ months", "Just researching"];
const BUDGETS = ["Under $5k", "$5k - $15k", "$15k - $50k", "$50k - $100k", "$100k+"];

const COMMON_TOOLS = ["CRM (HubSpot, Salesforce, etc.)", "ERP System", "Custom In-House Software", "Excel / Spreadsheets", "Marketing Automation", "Accounting Software", "Shipping / Fulfillment (ShipStation, etc.)", "Inventory Management", "E-commerce Platform (Shopify, WooCommerce)", "Payment / POS System", "Project Management (Asana, Monday)", "Communication Tools (Slack, Teams)"];
const COMMON_PAINS = ["Manual data entry", "Systems don't talk to each other", "Reporting is too slow/difficult", "Scaling bottlenecks", "High error rates", "Poor customer experience", "Shipping & fulfillment errors", "Inventory tracking issues", "No real-time visibility into operations", "Compliance / regulatory overhead", "Customer onboarding friction", "Outdated website or online presence"];
const COMMON_GOALS = ["Automate repetitive tasks", "Improve data visibility", "Increase sales conversion", "Reduce operational costs", "Modernize legacy tech", "Launch a new product/service", "Automate shipping & logistics", "Build custom client/customer portal", "Integrate payment processing", "Improve inventory management", "Scale e-commerce operations", "Enhance security & compliance"];

// --- Components ---

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
    const steps = [
        { id: 1, label: "Profile" },
        { id: 2, label: "Business" },
        { id: 3, label: "Current Tech" },
        { id: 4, label: "Goals" },
        { id: 5, label: "Budget" },
    ];

    return (
        <div className="w-full max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-200/50 -z-10 rounded-full" />
                <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-sky-500 -z-10 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((Math.min(currentStep, 5) - 1) / 4) * 100}%` }}
                />

                {steps.map((step) => {
                    const isActive = currentStep === step.id;
                    const isPast = currentStep > step.id;
                    return (
                        <div key={step.id} className="flex flex-col items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${isActive ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)] ring-4 ring-sky-50' : isPast ? 'bg-sky-500 text-white' : 'bg-white text-slate-400 border border-slate-200'}`}>
                                {isPast ? <Check className="w-4 h-4" /> : step.id}
                            </div>
                            <span className={`text-[10px] md:text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-sky-600' : isPast ? 'text-slate-600' : 'text-slate-400'}`}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Input Components
const Input = ({ label, required, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string, required?: boolean }) => (
    <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-700">{label} {required && <span className="text-rose-500">*</span>}</label>
        <input
            {...props}
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all duration-200"
        />
    </div>
);

const CardSelect = ({ options, value, onChange }: { options: string[], value: string, onChange: (v: string) => void }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map((opt) => {
            const isSelected = value === opt;
            return (
                <button
                    key={opt}
                    onClick={() => onChange(opt)}
                    className={`group relative px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 text-left hover:-translate-y-0.5 hover:shadow-md ${isSelected ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/20' : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/30'}`}
                >
                    <span className="flex items-center gap-2">
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />}
                        {opt}
                    </span>
                </button>
            )
        })}
    </div>
);

const MultiSelect = ({ options, value, onChange }: { options: string[], value: string[], onChange: (v: string[]) => void }) => {
    const toggle = (opt: string) => {
        if (value.includes(opt)) onChange(value.filter(v => v !== opt));
        else onChange([...value, opt]);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {options.map((opt) => {
                const isSelected = value.includes(opt);
                return (
                    <button
                        key={opt}
                        onClick={() => toggle(opt)}
                        className={`flex items-start gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 text-left hover:-translate-y-0.5 hover:shadow-md ${isSelected ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/20' : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/30'}`}
                    >
                        <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm' : 'border border-slate-300 bg-white'}`}>
                            {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        {opt}
                    </button>
                )
            })}
        </div>
    );
};

// --- Main Page Component ---

export default function QuestionnairePage() {
    const params = useParams();
    const salesmanCode = params?.code as string || "default";

    const [step, setStep] = useState<StepId>(1);
    const [data, setData] = useState<FormData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem(`quantlab_questionnaire_${salesmanCode}`);
        if (saved) {
            try { setData(JSON.parse(saved)); } catch (e) { console.error("Failed to parse saved data", e); }
        }
    }, [salesmanCode]);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem(`quantlab_questionnaire_${salesmanCode}`, JSON.stringify(data));
    }, [data, salesmanCode]);

    const updateData = (fields: Partial<FormData>) => {
        setData(prev => ({ ...prev, ...fields }));
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 6) as StepId);
    const prevStep = () => setStep(s => Math.max(s - 1, 1) as StepId);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/questionnaire", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, salesman_code: salesmanCode }),
            });
            if (!res.ok) {
                const err = await res.json();
                alert(err.error || "Something went wrong. Please try again.");
                setIsSubmitting(false);
                return;
            }
            // Clear local storage on success
            localStorage.removeItem(`quantlab_questionnaire_${salesmanCode}`);
            nextStep(); // Go to step 6 (Success)
        } catch {
            alert("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- Steps rendering ---

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3"><User className="text-sky-500" /> About You</h2>
                            <p className="text-slate-500 mt-2">Let's start with the basics to get to know you.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Input label="Full Name" required value={data.name} onChange={e => updateData({ name: e.target.value })} placeholder="John Doe" />
                            <Input label="Email Address" type="email" required value={data.email} onChange={e => updateData({ email: e.target.value })} placeholder="john@company.com" />
                            <Input label="Phone Number" type="tel" value={data.phone} onChange={e => updateData({ phone: e.target.value })} placeholder="(555) 123-4567" />
                            <Input label="Job Title" value={data.job_title} onChange={e => updateData({ job_title: e.target.value })} placeholder="CEO, Director of IT, etc." />
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3"><Building2 className="text-emerald-500" /> Your Business</h2>
                            <p className="text-slate-500 mt-2">Tell us a bit about your organization.</p>
                        </div>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Input label="Company Name" required value={data.company} onChange={e => updateData({ company: e.target.value })} placeholder="Acme Corp" />
                                <Input label="Website URL" value={data.website} onChange={e => updateData({ website: e.target.value })} placeholder="acmecorp.com" />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">Industry</label>
                                <CardSelect options={INDUSTRIES} value={data.industry} onChange={v => updateData({ industry: v })} />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">Company Size (Employees)</label>
                                <CardSelect options={SIZES} value={data.company_size} onChange={v => updateData({ company_size: v })} />
                            </div>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3"><Wrench className="text-purple-500" /> Current Tech Setup</h2>
                            <p className="text-slate-500 mt-2">What tools are you currently using to run your business?</p>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">What systems are currently in place? (Select all that apply)</label>
                                <MultiSelect options={COMMON_TOOLS} value={data.current_tools} onChange={v => updateData({ current_tools: v })} />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">Overall satisfaction with current workflows (1 = Poor, 5 = Excellent)</label>
                                <input
                                    type="range" min="1" max="5" step="1"
                                    value={data.satisfaction} onChange={e => updateData({ satisfaction: parseInt(e.target.value) })}
                                    className="w-full accent-purple-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                                    <span>1 (Very Poor)</span><span>2</span><span>3</span><span>4</span><span>5 (Excellent)</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">What are your biggest pain points? (Select all that apply)</label>
                                <MultiSelect options={COMMON_PAINS} value={data.pain_points} onChange={v => updateData({ pain_points: v })} />
                            </div>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3"><Target className="text-orange-500" /> Goals & Timeline</h2>
                            <p className="text-slate-500 mt-2">What does success look like for this initiative?</p>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">Primary Goals (Select up to 3)</label>
                                <MultiSelect options={COMMON_GOALS} value={data.goals} onChange={v => updateData({ goals: v })} />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">When are you hoping to implement a solution?</label>
                                <CardSelect options={TIMELINES} value={data.timeline} onChange={v => updateData({ timeline: v })} />
                            </div>
                        </div>
                    </motion.div>
                );
            case 5:
                return (
                    <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3"><Wallet className="text-rose-500" /> Investment & Summary</h2>
                            <p className="text-slate-500 mt-2">Final details before submitting your profile.</p>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <label className="text-sm font-semibold text-slate-700 block mb-3">Estimated Budget Range for this Initiative</label>
                                <CardSelect options={BUDGETS} value={data.budget_range} onChange={v => updateData({ budget_range: v })} />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Any additional details we should know?</label>
                                <textarea
                                    value={data.additional_notes} onChange={e => updateData({ additional_notes: e.target.value })}
                                    rows={4}
                                    placeholder="Specific integrations required, compliance concerns, etc."
                                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-all duration-200 resize-none"
                                />
                            </div>
                        </div>
                    </motion.div>
                );
            case 6: // Success screen
                return (
                    <motion.div key="step6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="text-center py-10">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/25">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">You&apos;re All Set! 🎉</h2>
                        <p className="text-slate-600 max-w-lg mx-auto mb-4 text-lg">
                            Thank you for taking the time to share your business needs.
                        </p>
                        <p className="text-slate-500 max-w-md mx-auto mb-8">
                            Your dedicated QuantLab representative will review your profile and reach out within <strong className="text-emerald-600">24 hours</strong> with tailored solutions designed specifically for your business.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Confidential</span>
                            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> No Obligation</span>
                            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Custom Solutions</span>
                        </div>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all"
                        >
                            Visit QuantLab <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                );
        }
    };

    const isStepValid = () => {
        if (step === 1) return data.name.trim() !== "" && data.email.trim() !== "";
        if (step === 2) return data.company.trim() !== "";
        return true; // Other steps are optional based on selection cards
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-500/20 selection:text-sky-900">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 px-6 py-4 sticky top-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-500 shadow-lg shadow-emerald-500/25">
                        <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="text-slate-900 font-bold block leading-tight">QuantLab Solutions</span>
                        <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Business Needs Assessment</span>
                    </div>
                </div>
                {step < 6 && (
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Secure & Confidential
                    </div>
                )}
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
                {step < 6 && <StepIndicator currentStep={step} />}

                {/* Main Card */}
                <div className="bg-white rounded-2xl md:rounded-[32px] shadow-sm border border-slate-200 p-6 md:p-12 min-h-[400px] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {renderStep()}
                    </AnimatePresence>
                </div>

                {/* Footer Controls */}
                {step < 6 && (
                    <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                        <button
                            onClick={prevStep}
                            disabled={step === 1 || isSubmitting}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-600 hover:bg-slate-200 bg-slate-100'}`}
                        >
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>

                        <button
                            onClick={step === 5 ? handleSubmit : nextStep}
                            disabled={!isStepValid() || isSubmitting}
                            className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold transition-all shadow-lg w-full sm:w-auto justify-center ${!isStepValid() || isSubmitting ? 'bg-slate-300 shadow-none cursor-not-allowed' : 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:scale-95'}`}
                        >
                            {isSubmitting ? (
                                <>Processing...</>
                            ) : step === 5 ? (
                                <>Submit Profile <CheckCircle2 className="w-4 h-4" /></>
                            ) : (
                                <>Continue <ArrowRight className="w-4 h-4" /></>
                            )}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
