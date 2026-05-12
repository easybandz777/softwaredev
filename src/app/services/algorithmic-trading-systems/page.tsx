import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Bot, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Algorithmic Trading Bot Development — 5 Live Systems | QuantLab",
    description:
        "Custom trading bot development for MA Supertrend, VWAP, and momentum strategies. 5 live systems running real money with <12ms latency and 24/7 uptime. Get a build quote.",
    alternates: { canonical: "https://quantlabusa.dev/services/algorithmic-trading-systems" },
    openGraph: {
        title: "5 Live Trading Bots. <12ms Latency. Real Money.",
        description:
            "Custom-built algorithmic trading systems running MA Supertrend, VWAP, and multi-strategy setups on real capital. Risk controls baked into the order path.",
        url: "https://quantlabusa.dev/services/algorithmic-trading-systems",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Algorithmic Trading Systems Development",
    name: "Algorithmic Trading Systems",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Development of live algorithmic trading systems including MA Supertrend, VWAP, and momentum strategies, with real-time market data, risk controls, and 24/7 uptime.",
    url: "https://quantlabusa.dev/services/algorithmic-trading-systems",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you guarantee profitable strategies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No, and nobody honest will. Markets change. What we guarantee is that the system you specified is built correctly, runs with proper risk controls, executes orders at the prices you'd expect, and reports what actually happened. The alpha is your edge. The engineering is ours.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build a strategy from scratch or do you need one?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both. If you have a hypothesis, we turn it into a tested system. If you need help shaping the idea, we can run research in Python against historical data before committing to a live build. But we charge for both phases — research time is real time.",
            },
        },
        {
            "@type": "Question",
            name: "Which exchanges and asset classes have you worked with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Crypto exchanges (Binance, Coinbase, Kraken, Bybit via CCXT and native APIs), US equities through IBKR and Alpaca, and futures through CQG. If there's a documented REST/WebSocket API, we can integrate it.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle risk management?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every system has a layered risk module that sits between the strategy and the broker. Hard position-size caps, max daily loss, kill switches on drawdown thresholds, and a circuit breaker that halts all trading if the feed or the broker acts weird. The strategy can't override these.",
            },
        },
        {
            "@type": "Question",
            name: "Can you take over an existing bot?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We've inherited Python and Node.js bots, audited the signal logic and risk flow, fixed the silent bugs, and redeployed them. Usually the first thing we find is that the backtest and the live path have drifted — we reconcile that.",
            },
        },
    ],
};

export default function AlgorithmicTradingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Algorithmic Trading Systems</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-blue-400 mb-6">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Algorithmic Trading Systems
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Live trading bots moving real capital in real markets. 5 systems deployed — not backtested prototypes sitting in a notebook.
                    </p>
                    <ConsultationCTA label="Discuss a Strategy" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Algorithmic trading bot development for operators who want the code</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            You can rent a strategy on TradingView or buy a "guaranteed" Telegram signal bot. Neither survives contact with a real market. If you are serious about systematic trading, you need code you control, parameters you can audit, infrastructure you trust, and risk management that turns the bot off before it turns your account off. That is what we build — for individual traders, prop desks, and small fund operators who want the system to be theirs.
                        </p>
                        <p>
                            Systems live in one of three categories. Trend-following bots running MA Supertrend variants with regime filters. VWAP and volume-profile strategies on intraday equities. And momentum plus mean-reversion hybrids across crypto pairs, where position sizing reacts to realized volatility.
                        </p>
                        <p>
                            Multi-strategy setups run several of these side by side with capital allocated by a portfolio manager layer that can rebalance nightly or on a signal. The 5 systems currently in production together handle thousands of orders a week with live P&L reporting, trade logs, and Slack alerts.
                        </p>
                        <p>
                            Every one of them is a full stack: market data ingestion over WebSockets, a strategy engine that can be unit-tested independently of the exchange, a risk layer, an order manager that handles partial fills and reconnects, and a dashboard that shows you what the bot is thinking right now — not just what it did yesterday.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who this is for</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Traders, prop firms, family offices, and funds who have a thesis — or a working backtest — and need it running live without the 6-month detour of hiring an in-house quant dev team. You bring the edge; we bring the execution layer.
                        </p>
                        <p>
                            We also work with experienced algo traders who have a strategy stuck in TradingView or Python and need it hardened for production: proper order management, reconnect logic, state recovery on restart, and all the unglamorous engineering that separates a paper bot from a live one.
                        </p>
                        <p>
                            If you're asking whether a strategy will be profitable before writing a line of code, you're asking the wrong person. We don't sell alpha. We build the infrastructure that lets you test and run yours.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Step one is always the spec. We write down — on paper — exactly what triggers an entry, what triggers an exit, what sizes the position, and what happens when the connection drops in the middle of an open trade. If any of those questions have a fuzzy answer, we fix that first.
                        </p>
                        <p>
                            Then we build the strategy engine against replay data so we can run it deterministically. Same candles, same output, every time. This is what lets us trust the live version — if the replayed behavior matches the backtest, we know the code is consistent. Any drift gets tracked.
                        </p>
                        <p>
                            Deployment goes in stages: paper trading first, then small live size, then scaled up once the live metrics line up with the backtest. We hook up Sentry and a Slack channel so anomalies surface immediately instead of getting buried in logs nobody reads.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Python",
                            "Node.js",
                            "WebSockets",
                            "CCXT / native exchange APIs",
                            "Interactive Brokers",
                            "PostgreSQL / TimescaleDB",
                            "Redis",
                            "Docker",
                            "Sentry",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Python for research and strategy logic (pandas, numpy, vectorbt where it fits). Node.js for the low-latency WebSocket and order routing side on certain crypto systems. TimescaleDB when the tick-level history gets large enough that plain Postgres chokes on aggregations.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A live trading system running on your chosen broker or exchange",
                            "Separate strategy, risk, and execution modules — each testable on its own",
                            "Hard-coded risk limits that override the strategy if something goes wrong",
                            "Replay and backtest environment that uses the same code as production",
                            "Real-time dashboard showing positions, open orders, and current signals",
                            "Slack and email alerts for anomalies, disconnects, and limit breaches",
                            "Full historical trade log with entry reasons, P&L, and slippage analysis",
                            "Optional monthly retainer for strategy updates and infrastructure ops",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you guarantee profitable strategies?",
                                a: "No, and nobody honest will. Markets change. What we guarantee is that the system you specified is built correctly, runs with proper risk controls, executes orders at the prices you'd expect, and reports what actually happened. The alpha is your edge. The engineering is ours.",
                            },
                            {
                                q: "Can you build a strategy from scratch or do you need one?",
                                a: "Both. If you have a hypothesis, we turn it into a tested system. If you need help shaping the idea, we can run research in Python against historical data before committing to a live build. But we charge for both phases — research time is real time.",
                            },
                            {
                                q: "Which exchanges and asset classes have you worked with?",
                                a: "Crypto exchanges (Binance, Coinbase, Kraken, Bybit via CCXT and native APIs), US equities through IBKR and Alpaca, and futures through CQG. If there's a documented REST/WebSocket API, we can integrate it.",
                            },
                            {
                                q: "How do you handle risk management?",
                                a: "Every system has a layered risk module that sits between the strategy and the broker. Hard position-size caps, max daily loss, kill switches on drawdown thresholds, and a circuit breaker that halts all trading if the feed or the broker acts weird. The strategy can't override these.",
                            },
                            {
                                q: "Can you take over an existing bot?",
                                a: "Yes. We've inherited Python and Node.js bots, audited the signal logic and risk flow, fixed the silent bugs, and redeployed them. Usually the first thing we find is that the backtest and the live path have drifted — we reconcile that.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Operations and P&L dashboards for the firm around the bot." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Deployment, monitoring, and uptime for 24/7 systems." },
                            { slug: "web-applications", title: "Web Applications", desc: "Client-facing trading dashboards and portals." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-violet-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Bring us the thesis. We'll build the system.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Book a call to walk through your strategy and the live setup you need. No NDA required to talk.
                        </p>
                        <ConsultationCTA label="Book a Consultation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
