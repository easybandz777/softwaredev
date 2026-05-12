export const metadata = {
    title: "Privacy Policy | QuantLab Software Solutions",
    description: "Privacy policy for QuantLab Software Solutions.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-6">
                    <p>
                        <strong className="text-white">Last updated:</strong> April 2026
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">Information We Collect</h2>
                    <p>
                        When you submit our consultation form, we collect your name, email address,
                        phone number (optional), company name (optional), and project details. This
                        information is used solely to respond to your inquiry and discuss potential
                        project work.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">How We Use Your Information</h2>
                    <p>
                        We use the information you provide to contact you about your project inquiry,
                        send relevant follow-up communications, and improve our services. We do not
                        sell, rent, or share your personal information with third parties for marketing
                        purposes.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">Data Storage</h2>
                    <p>
                        Your information is stored securely and retained only as long as necessary
                        to fulfill the purposes described above or as required by law.
                    </p>

                    <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
                    <p>
                        If you have questions about this privacy policy or want your data removed,
                        contact us at{" "}
                        <a href="mailto:beltz@quantlabusa.dev" className="text-sky-400 hover:text-sky-300">
                            beltz@quantlabusa.dev
                        </a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
