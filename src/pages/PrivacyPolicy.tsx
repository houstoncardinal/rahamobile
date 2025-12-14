import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrivacyPolicy() {
  const navigate = useNavigate();
  const lastUpdated = "December 14, 2024";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">Privacy Policy</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-sm">Last Updated: {lastUpdated}</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Raha Health Technologies ("Raha," "we," "us," or "our") is committed to protecting your privacy and the confidentiality of Protected Health Information (PHI). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Raha mobile application ("App"). This policy is designed to comply with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable privacy regulations.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-2">2.1 Account Information</h3>
          <p className="text-muted-foreground leading-relaxed">
            When you create an account, we collect:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Professional role and credentials</li>
            <li>Organization affiliation</li>
            <li>Account preferences and settings</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">2.2 Clinical Documentation Data</h3>
          <p className="text-muted-foreground leading-relaxed">
            When you use the App for clinical documentation, the following data may be processed:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Voice recordings (for transcription purposes)</li>
            <li>Transcribed text from dictation</li>
            <li>Clinical notes you create or edit</li>
            <li>Template selections and preferences</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">2.3 Device and Usage Information</h3>
          <p className="text-muted-foreground leading-relaxed">
            We automatically collect:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Device type, operating system, and version</li>
            <li>App usage patterns and feature interactions</li>
            <li>Error logs and crash reports</li>
            <li>IP address (for security and audit purposes)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">We use collected information to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li><strong>Provide Services:</strong> Process voice transcriptions, generate clinical notes, and deliver core App functionality</li>
            <li><strong>Improve the App:</strong> Analyze usage patterns to enhance features and user experience</li>
            <li><strong>Ensure Security:</strong> Detect and prevent fraud, unauthorized access, and other security threats</li>
            <li><strong>Maintain Compliance:</strong> Create audit logs as required by HIPAA and other regulations</li>
            <li><strong>Communicate:</strong> Send service updates, security alerts, and support communications</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">4. Protected Health Information (PHI)</h2>
          <p className="text-muted-foreground leading-relaxed">
            We understand that clinical documentation may contain PHI. Our handling of PHI is governed by:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li><strong>HIPAA Privacy Rule:</strong> We implement appropriate safeguards to protect PHI confidentiality</li>
            <li><strong>HIPAA Security Rule:</strong> We maintain administrative, physical, and technical safeguards</li>
            <li><strong>Business Associate Agreements:</strong> We execute BAAs with covered entities as required</li>
            <li><strong>Minimum Necessary Standard:</strong> We limit PHI access to what is necessary for service delivery</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">5. PHI Redaction and De-identification</h2>
          <p className="text-muted-foreground leading-relaxed">
            The App includes PHI redaction features designed to help you remove identifying information before exporting notes. However, you are responsible for:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
            <li>Reviewing all content before export</li>
            <li>Ensuring appropriate de-identification per your organization's policies</li>
            <li>Verifying redaction accuracy before sharing any documentation</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">6. Data Storage and Security</h2>
          <p className="text-muted-foreground leading-relaxed">We implement robust security measures including:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
            <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication options</li>
            <li><strong>Audit Logging:</strong> Comprehensive logging of all data access and modifications</li>
            <li><strong>Infrastructure:</strong> HIPAA-compliant cloud infrastructure with SOC 2 certification</li>
            <li><strong>Regular Assessments:</strong> Periodic security audits and vulnerability assessments</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">7. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain data according to the following guidelines:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion request</li>
            <li><strong>Voice Recordings:</strong> Deleted immediately after transcription unless you opt to save them</li>
            <li><strong>Clinical Notes:</strong> Retained according to your organization's policies or deleted upon request</li>
            <li><strong>Audit Logs:</strong> Retained for 6 years as required by HIPAA</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">8. Information Sharing</h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell your personal information. We may share information with:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li><strong>Service Providers:</strong> Third parties who assist in App operation under strict confidentiality agreements and BAAs where applicable</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions, with appropriate privacy protections</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">9. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
            <li><strong>Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Restriction:</strong> Request limitation of certain data processing activities</li>
            <li><strong>Objection:</strong> Object to processing for certain purposes</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-2">
            To exercise these rights, contact us at privacy@rahahealth.app.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">10. Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            The App is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it promptly.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">11. International Data Transfers</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your data may be processed in countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers, including Standard Contractual Clauses and compliance with applicable data protection laws.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">12. Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            The App may integrate with third-party services (e.g., EHR systems). These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">13. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy periodically. We will notify you of material changes through the App or via email. Your continued use after changes constitutes acceptance of the updated policy. We encourage you to review this policy regularly.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">14. California Privacy Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know, delete, and opt-out of sale of personal information. We do not sell personal information. To exercise your CCPA rights, contact us at privacy@rahahealth.app.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">15. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            For privacy-related questions or to exercise your rights:
          </p>
          <p className="text-muted-foreground mt-2">
            <strong>Raha Health Technologies</strong><br />
            Privacy Officer<br />
            Email: privacy@rahahealth.app<br />
            Support: support@rahahealth.app
          </p>
          <p className="text-muted-foreground mt-2">
            For HIPAA-related inquiries, please include "HIPAA Request" in your subject line.
          </p>

          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Raha Health Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
