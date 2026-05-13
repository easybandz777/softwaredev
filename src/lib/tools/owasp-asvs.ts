export type AsvsLevel = "L1" | "L2";

export type AsvsItem = {
    id: string;
    text: string;
    level: AsvsLevel;
};

export type AsvsCategory = {
    id: string;
    name: string;
    summary: string;
    items: AsvsItem[];
};

export const OWASP_ASVS: AsvsCategory[] = [
    {
        id: "V2",
        name: "Authentication",
        summary: "Identity proofing, password handling, lockouts, MFA.",
        items: [
            { id: "V2.1.1", text: "User passwords are at least 12 characters in length.", level: "L1" },
            { id: "V2.1.2", text: "Passwords up to 64 characters or longer are permitted.", level: "L1" },
            { id: "V2.1.3", text: "User passwords are not truncated.", level: "L1" },
            { id: "V2.1.4", text: "All printable Unicode characters including spaces are allowed in passwords.", level: "L1" },
            { id: "V2.1.7", text: "New passwords are checked against a list of known compromised passwords.", level: "L1" },
            { id: "V2.2.1", text: "Anti-automation defenses (CAPTCHA, rate limiting) protect against credential stuffing.", level: "L1" },
            { id: "V2.2.2", text: "Weak authenticators (SMS, voice) are not used as a single factor.", level: "L2" },
            { id: "V2.3.1", text: "System-generated initial passwords are random, at least 6 chars, single-use.", level: "L1" },
            { id: "V2.4.1", text: "Passwords are stored using an approved KDF (Argon2id, scrypt, bcrypt, PBKDF2).", level: "L1" },
            { id: "V2.4.4", text: "Per-user salts are unique and at least 32 bits.", level: "L1" },
            { id: "V2.5.1", text: "System-generated tokens (password reset, MFA, OOB) are at least 20 chars random.", level: "L1" },
            { id: "V2.5.4", text: "Default deployment passwords (admin/admin) are removed before production.", level: "L1" },
            { id: "V2.7.1", text: "Plaintext password recovery does not exist (no email-the-password flows).", level: "L1" },
            { id: "V2.8.1", text: "Time-based OTP authenticators time out after 30 seconds and lock after retries.", level: "L2" },
        ],
    },
    {
        id: "V3",
        name: "Session Management",
        summary: "Token lifecycle, cookie flags, idle / absolute timeouts.",
        items: [
            { id: "V3.1.1", text: "Session tokens are never disclosed in URL parameters or error messages.", level: "L1" },
            { id: "V3.2.1", text: "New session tokens are generated at login, re-authentication, and privilege change.", level: "L1" },
            { id: "V3.2.2", text: "Session tokens are at least 64 bits of entropy.", level: "L1" },
            { id: "V3.2.3", text: "Session tokens are generated using an approved CSPRNG.", level: "L1" },
            { id: "V3.3.1", text: "Logout invalidates the session on the server side.", level: "L1" },
            { id: "V3.3.2", text: "Idle session timeout is enforced (typically 15–30 min for sensitive apps).", level: "L1" },
            { id: "V3.4.1", text: "Cookie-based session tokens have the Secure attribute set.", level: "L1" },
            { id: "V3.4.2", text: "Cookie-based session tokens have the HttpOnly attribute set.", level: "L1" },
            { id: "V3.4.3", text: "Cookie-based session tokens use SameSite to limit CSRF (Strict or Lax).", level: "L1" },
            { id: "V3.5.2", text: "Stateless tokens (JWT) use strong cryptography and digital signatures.", level: "L2" },
            { id: "V3.5.3", text: "Stateless tokens validate audience, issuer, expiry, and not-before claims.", level: "L2" },
        ],
    },
    {
        id: "V4",
        name: "Access Control",
        summary: "Authorization checks, least privilege, multi-tenancy isolation.",
        items: [
            { id: "V4.1.1", text: "Application enforces access control rules on a trusted service layer (not the client).", level: "L1" },
            { id: "V4.1.2", text: "All user / data attributes used by access control checks are server-side trusted.", level: "L1" },
            { id: "V4.1.3", text: "Principle of least privilege is enforced on all functions.", level: "L1" },
            { id: "V4.1.5", text: "Access control checks fail closed (deny by default on error).", level: "L1" },
            { id: "V4.2.1", text: "Sensitive data and APIs protect against insecure direct object reference (IDOR).", level: "L1" },
            { id: "V4.2.2", text: "Anti-CSRF tokens or other mitigations protect state-changing requests.", level: "L1" },
            { id: "V4.3.1", text: "Administrative interfaces use appropriate multi-factor authentication.", level: "L1" },
            { id: "V4.3.2", text: "Directory browsing is disabled unless deliberately permitted.", level: "L1" },
        ],
    },
    {
        id: "V5",
        name: "Validation, Sanitization & Encoding",
        summary: "Input validation, output encoding, injection defenses.",
        items: [
            { id: "V5.1.1", text: "Application has defenses against HTTP parameter pollution.", level: "L1" },
            { id: "V5.1.2", text: "Frameworks protect against mass assignment vulnerabilities.", level: "L1" },
            { id: "V5.1.3", text: "All input is validated for type, length, range, and format (positive validation).", level: "L1" },
            { id: "V5.1.4", text: "Structured data is strongly typed and validated against a schema.", level: "L1" },
            { id: "V5.1.5", text: "URL redirects and forwards only allow whitelisted destinations.", level: "L1" },
            { id: "V5.2.1", text: "All untrusted HTML is sanitized with a well-known library (DOMPurify, OWASP Java HTML Sanitizer).", level: "L1" },
            { id: "V5.2.2", text: "All output is encoded in the appropriate context (HTML, URL, JS, CSS, SQL).", level: "L1" },
            { id: "V5.2.3", text: "User-supplied data is escaped in templating engines before rendering.", level: "L1" },
            { id: "V5.3.1", text: "Output encoding for the user's interpreter prevents XSS.", level: "L1" },
            { id: "V5.3.4", text: "All SQL queries use parameterized queries or prepared statements.", level: "L1" },
            { id: "V5.3.5", text: "ORMs and abstraction libraries are used safely (no string-concatenated queries).", level: "L1" },
            { id: "V5.3.7", text: "Application protects against LDAP injection via parameterized queries.", level: "L2" },
            { id: "V5.3.8", text: "Application protects against OS command injection.", level: "L1" },
            { id: "V5.3.9", text: "Application protects against LFI and RFI.", level: "L1" },
            { id: "V5.3.10", text: "Application protects against XPath / NoSQL injection.", level: "L1" },
            { id: "V5.5.1", text: "Serialized objects use integrity controls or are not used at all.", level: "L1" },
        ],
    },
    {
        id: "V6",
        name: "Stored Cryptography",
        summary: "Approved algorithms, key management, secret storage.",
        items: [
            { id: "V6.1.1", text: "Regulated private data (PII, payment, health) is identified and classified.", level: "L1" },
            { id: "V6.2.1", text: "All cryptographic modules fail securely.", level: "L1" },
            { id: "V6.2.2", text: "Industry-vetted, approved cryptographic algorithms are used (AES-256, SHA-2/3, RSA-2048+).", level: "L1" },
            { id: "V6.2.3", text: "Initialization vectors (IVs) are unique and non-predictable.", level: "L1" },
            { id: "V6.3.1", text: "All random values use a cryptographically secure PRNG (crypto.getRandomValues, secrets module).", level: "L1" },
            { id: "V6.4.1", text: "A secrets management solution (Vault, AWS Secrets Manager) is used to store keys.", level: "L2" },
            { id: "V6.4.2", text: "Key material is not exposed to the application; sign / decrypt operations go through a key API.", level: "L2" },
        ],
    },
    {
        id: "V7",
        name: "Error Handling & Logging",
        summary: "Useful logs, no info leakage, audit trail for security events.",
        items: [
            { id: "V7.1.1", text: "Application does not log credentials, session tokens, or sensitive PII.", level: "L1" },
            { id: "V7.1.3", text: "Security-relevant events (auth, access control failures, input validation failures) are logged.", level: "L1" },
            { id: "V7.1.4", text: "Each log entry includes the necessary information for forensics.", level: "L1" },
            { id: "V7.2.1", text: "All authentication decisions are logged.", level: "L2" },
            { id: "V7.2.2", text: "All access control decisions are logged.", level: "L2" },
            { id: "V7.3.1", text: "Application encodes user-supplied data in logs to prevent log injection.", level: "L1" },
            { id: "V7.4.1", text: "A generic error message is shown to users; full stack traces never reach the browser.", level: "L1" },
            { id: "V7.4.3", text: "Error handling preserves logical correctness (does not enable bypass of access control).", level: "L1" },
        ],
    },
    {
        id: "V8",
        name: "Data Protection",
        summary: "PII handling, data classification, client-side storage.",
        items: [
            { id: "V8.1.1", text: "Sensitive data is sent in the body or headers — never the URL.", level: "L1" },
            { id: "V8.1.2", text: "Cache-Control headers prevent caching of sensitive data.", level: "L1" },
            { id: "V8.2.1", text: "Application sets Cache-Control: no-store on responses with sensitive data.", level: "L1" },
            { id: "V8.2.3", text: "Authenticated data is cleared from client storage on logout.", level: "L1" },
            { id: "V8.3.1", text: "Sensitive data is sent over TLS only (HSTS enforced).", level: "L1" },
            { id: "V8.3.2", text: "Users can erase or export their data per applicable regulations (GDPR, CCPA).", level: "L1" },
            { id: "V8.3.4", text: "Sensitive personal information is identified and classified.", level: "L1" },
        ],
    },
    {
        id: "V9",
        name: "Communications",
        summary: "TLS configuration, HSTS, certificate validation.",
        items: [
            { id: "V9.1.1", text: "TLS is used for all inbound traffic; mixed-content does not exist.", level: "L1" },
            { id: "V9.1.2", text: "Only the latest TLS versions are enabled (TLS 1.2+, ideally 1.3).", level: "L1" },
            { id: "V9.1.3", text: "All cipher suites are forward-secret and authenticated (no RC4, 3DES, NULL, anonymous).", level: "L1" },
            { id: "V9.2.1", text: "Backend TLS connections verify certificates (no curl -k in code).", level: "L1" },
            { id: "V9.2.2", text: "Encrypted communications such as TLS are used for all backend connections.", level: "L1" },
            { id: "V9.2.4", text: "Strict-Transport-Security header is set with a long max-age and includeSubDomains.", level: "L1" },
        ],
    },
    {
        id: "V10",
        name: "Malicious Code",
        summary: "Supply chain integrity, code reviews, dependency scanning.",
        items: [
            { id: "V10.1.1", text: "Code analysis tools are used in CI to find malicious code (Semgrep, Snyk, Dependabot).", level: "L2" },
            { id: "V10.2.1", text: "Code is reviewed for backdoors, time bombs, and known malicious patterns.", level: "L2" },
            { id: "V10.3.1", text: "Application has integrity controls (signed releases, checksums, locked dependencies).", level: "L1" },
            { id: "V10.3.2", text: "Application uses an SBOM (Software Bill of Materials) or equivalent.", level: "L1" },
        ],
    },
    {
        id: "V11",
        name: "Business Logic",
        summary: "Workflow integrity, anti-automation, sequential checks.",
        items: [
            { id: "V11.1.1", text: "Application processes a sequential business workflow in the order specified.", level: "L1" },
            { id: "V11.1.2", text: "Business logic limits are enforced (e.g. transfers cannot exceed account balance).", level: "L1" },
            { id: "V11.1.3", text: "Rate-limiting and anti-automation defenses protect business-critical functions.", level: "L1" },
            { id: "V11.1.4", text: "Defenses exist against time-of-check / time-of-use (TOCTOU) attacks.", level: "L2" },
        ],
    },
    {
        id: "V12",
        name: "Files & Resources",
        summary: "Upload validation, MIME sniffing, path traversal.",
        items: [
            { id: "V12.1.1", text: "Application does not accept large files (> sane limit) that could exhaust resources.", level: "L1" },
            { id: "V12.1.2", text: "Uploaded files are stored outside the web root.", level: "L1" },
            { id: "V12.1.3", text: "User-supplied filenames are not used directly on disk; a generated UUID is.", level: "L1" },
            { id: "V12.2.1", text: "File uploads are validated against a whitelist of expected MIME types.", level: "L1" },
            { id: "V12.3.1", text: "User-supplied file metadata cannot directly access other files (path traversal).", level: "L1" },
            { id: "V12.3.4", text: "X-Content-Type-Options: nosniff header is set on responses.", level: "L1" },
            { id: "V12.4.1", text: "Uploaded files are scanned for malware before being served.", level: "L2" },
        ],
    },
    {
        id: "V13",
        name: "API & Web Service",
        summary: "Authentication, authorization, REST/GraphQL defenses.",
        items: [
            { id: "V13.1.1", text: "All API endpoints require authentication (no anonymous mutation endpoints).", level: "L1" },
            { id: "V13.1.3", text: "API URLs do not expose sensitive information like session tokens.", level: "L1" },
            { id: "V13.1.4", text: "API enforces authorization on every request, not just at session start.", level: "L1" },
            { id: "V13.2.1", text: "Enabled HTTP methods are restricted to the appropriate set per route.", level: "L1" },
            { id: "V13.2.2", text: "JSON schema validation enforces structure for API payloads.", level: "L1" },
            { id: "V13.2.3", text: "RESTful APIs implement CSRF protection (token, double-submit, or SameSite cookies).", level: "L1" },
            { id: "V13.3.1", text: "XML parsers disable external entity processing (XXE prevention).", level: "L1" },
            { id: "V13.4.1", text: "GraphQL APIs implement query depth and complexity limits.", level: "L2" },
            { id: "V13.4.2", text: "GraphQL introspection is disabled in production.", level: "L2" },
        ],
    },
    {
        id: "V14",
        name: "Configuration",
        summary: "Server hardening, secrets, CSP, dependency policies.",
        items: [
            { id: "V14.1.1", text: "Application build pipelines enforce policy (no force-pushes, signed commits, etc).", level: "L2" },
            { id: "V14.1.4", text: "Authorized administrators can verify the integrity of code, configuration, and environments.", level: "L2" },
            { id: "V14.2.1", text: "All components are up-to-date (no known CVEs in production dependencies).", level: "L1" },
            { id: "V14.2.2", text: "Unneeded features, files, and documentation are removed from production.", level: "L1" },
            { id: "V14.2.3", text: "Application uses subresource integrity (SRI) for externally hosted scripts.", level: "L1" },
            { id: "V14.3.2", text: "Web server / framework debug modes are disabled in production.", level: "L1" },
            { id: "V14.3.3", text: "HTTP headers do not expose version information of underlying frameworks.", level: "L1" },
            { id: "V14.4.1", text: "Content-Type header is set on every response.", level: "L1" },
            { id: "V14.4.2", text: "All API responses include Content-Disposition: attachment when appropriate.", level: "L1" },
            { id: "V14.4.3", text: "Content-Security-Policy is set with a tight default-src and no unsafe-inline.", level: "L1" },
            { id: "V14.4.4", text: "X-Frame-Options or frame-ancestors CSP directive is set to prevent clickjacking.", level: "L1" },
            { id: "V14.4.6", text: "Referrer-Policy is set to a privacy-respecting value (e.g. strict-origin-when-cross-origin).", level: "L1" },
            { id: "V14.4.7", text: "Permissions-Policy disables unused browser features.", level: "L2" },
            { id: "V14.5.1", text: "Application server only accepts HTTP methods in use by the application.", level: "L1" },
            { id: "V14.5.2", text: "Application validates the supplied Origin header on sensitive HTTP requests.", level: "L1" },
            { id: "V14.5.3", text: "Cross-Origin Resource Sharing (CORS) Access-Control-Allow-Origin uses a strict whitelist.", level: "L1" },
        ],
    },
];

export function countItems(): { total: number; l1: number; l2: number } {
    let total = 0;
    let l1 = 0;
    let l2 = 0;
    for (const cat of OWASP_ASVS) {
        for (const item of cat.items) {
            total++;
            if (item.level === "L1") l1++;
            else l2++;
        }
    }
    return { total, l1, l2 };
}
