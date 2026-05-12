export const metadata = {
    title: "Terms of Service | QuantLab Software Solutions",
    description: "Terms of service for QuantLab Software Solutions.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

                <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-6">
                    <p>
                        <strong className="text-white">Last updated:</strong> April 2026
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">Services</h2>
                    <p>
                        QuantLab Software Solutions provides custom software development,
                        cybersecurity consulting, and related technology services. All project
                        work is governed by individual agreements between QuantLab and the client.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">Consultation Requests</h2>
                    <p>
                        Submitting a consultation request through our website does not constitute
                        a binding agreement. It is an inquiry that we will review and respond to
                        within one business day.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">Intellectual Property</h2>
                    <p>
                        All content on this website, including text, graphics, logos, and code,
                        is the property of QuantLab Software Solutions and is protected by
                        applicable intellectual property laws.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
                    <p>
                        Questions about these terms can be directed to{" "}
                        <a href="mailto:beltz@quantlabusa.dev" className="text-sky-400 hover:text-sky-300">
                            beltz@quantlabusa.dev
                        </a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
