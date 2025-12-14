import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TermsOfService() {
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
            <h1 className="text-lg font-semibold">Terms of Service</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground text-sm">Last Updated: {lastUpdated}</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By downloading, installing, or using the Raha mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. Raha is a clinical documentation tool designed to assist healthcare professionals with note-taking and documentation workflows.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. Eligibility</h2>
          <p className="text-muted-foreground leading-relaxed">
            The App is intended for use by licensed healthcare professionals and authorized personnel within healthcare organizations. By using the App, you represent that you are at least 18 years of age and are a qualified healthcare professional or authorized to access clinical documentation systems.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. Description of Service</h2>
          <p className="text-muted-foreground leading-relaxed">
            Raha provides AI-assisted clinical documentation tools including voice-to-text transcription, structured note generation (SOAP, SBAR, PIE, DAR, and Epic-compatible formats), PHI redaction assistance, and export capabilities. The App is designed to support, not replace, clinical judgment and professional documentation practices.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">4. User Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed">You agree to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li>Use the App only for lawful purposes and in compliance with all applicable healthcare regulations</li>
            <li>Review and verify all AI-generated content before use in clinical records</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Comply with your organization's policies regarding clinical documentation</li>
            <li>Report any security vulnerabilities or unauthorized access immediately</li>
            <li>Not attempt to reverse engineer, decompile, or disassemble the App</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">5. HIPAA Compliance</h2>
          <p className="text-muted-foreground leading-relaxed">
            Raha is designed with HIPAA compliance in mind. However, you acknowledge that maintaining HIPAA compliance is a shared responsibility. You are responsible for ensuring that your use of the App complies with your organization's HIPAA policies and procedures. We recommend that your organization execute a Business Associate Agreement (BAA) with Raha before processing Protected Health Information (PHI).
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">6. AI-Generated Content Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            The App uses artificial intelligence to assist with clinical documentation. AI-generated content is provided as a drafting aid only. You acknowledge that:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li>AI-generated notes must be reviewed and approved by a qualified healthcare professional before being entered into any official medical record</li>
            <li>The App does not provide medical advice, diagnosis, or treatment recommendations</li>
            <li>You bear full responsibility for the accuracy and clinical appropriateness of any documentation you submit</li>
            <li>AI outputs may contain errors and should never be used without professional review</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">7. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            The App, including its design, features, and content (excluding user-generated content), is owned by Raha and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for its intended purpose. You may not copy, modify, distribute, sell, or lease any part of the App.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">8. Subscription and Payment</h2>
          <p className="text-muted-foreground leading-relaxed">
            Some features of the App may require a paid subscription. Subscription fees are billed in advance on a recurring basis. You may cancel your subscription at any time, but refunds are not provided for partial billing periods. We reserve the right to modify pricing with reasonable notice.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">9. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, RAHA AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE APP IN THE TWELVE MONTHS PRECEDING THE CLAIM.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">10. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground leading-relaxed">
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">11. Indemnification</h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to indemnify, defend, and hold harmless Raha and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your use of the App or violation of these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">12. Termination</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may suspend or terminate your access to the App at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the App ceases immediately. Provisions that by their nature should survive termination shall remain in effect.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">13. Modifications to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms at any time. We will notify you of material changes through the App or via email. Your continued use of the App after such modifications constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">14. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of competent jurisdiction.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">15. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="text-muted-foreground mt-2">
            <strong>Raha Health Technologies</strong><br />
            Email: legal@rahahealth.app<br />
            Support: support@rahahealth.app
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

export default TermsOfService;
