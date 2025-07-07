import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Child Arise Tennessee Privacy Policy - Learn how we protect your personal information and data privacy.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-clay-beige">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how Child Arise Tennessee 
              collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            


            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-black/60 mb-8">
                <strong>Effective Date:</strong> July 1, 2025<br />
                <strong>Last Updated:</strong> July 7, 2025
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">1. Overview</h2>
              <p className="text-black/80 mb-6">
                Child Arise Tennessee (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy and confidentiality 
                of all individuals we serve. This Privacy Policy describes how we collect, use, disclose, and safeguard 
                your information when you visit our website, use our services, or interact with our organization.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-black mb-3">2.1 Personal Information</h3>
              <p className="text-black/80 mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Demographic information (age, gender, family composition)</li>
                <li>Service-related information (program participation, case notes, assessments)</li>
                <li>Financial information (for donation processing and program eligibility)</li>
                <li>Health information (when necessary for service delivery)</li>
                <li>Educational information (academic records, school information)</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">2.2 Sensitive Information</h3>
              <p className="text-black/80 mb-6">
                Given the nature of our services, we may collect sensitive information including details about 
                incarceration, family circumstances, mental health, and other personal situations. This information 
                is collected only when necessary for service delivery and is subject to additional protections.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">2.3 Website and Digital Information</h3>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Website usage data (pages visited, time spent, user interactions)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Email engagement metrics</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">3. How We Use Your Information</h2>
              <p className="text-black/80 mb-4">We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li><strong>Service Delivery:</strong> To provide counseling, mentorship, education, and support services</li>
                <li><strong>Program Administration:</strong> To manage program enrollment, scheduling, and coordination</li>
                <li><strong>Communication:</strong> To send program updates, appointment reminders, and organizational news</li>
                <li><strong>Fundraising:</strong> To process donations and maintain donor relationships</li>
                <li><strong>Legal Compliance:</strong> To meet reporting requirements and legal obligations</li>
                <li><strong>Program Evaluation:</strong> To assess program effectiveness and improve services</li>
                <li><strong>Safety:</strong> To ensure the safety and wellbeing of participants and staff</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-black mb-3">4.1 Limited Sharing</h3>
              <p className="text-black/80 mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
                <li><strong>Service Providers:</strong> With trusted third parties who assist in service delivery</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect safety</li>
                <li><strong>Partner Organizations:</strong> With approved partners for coordinated care</li>
                <li><strong>Funding Sources:</strong> For reporting requirements (in aggregate or de-identified form)</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">4.2 Mandatory Reporting</h3>
              <p className="text-black/80 mb-6">
                As required by Tennessee law, we are mandated reporters for child abuse and neglect. 
                We may be required to report suspected abuse or neglect to appropriate authorities.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">5. Data Security</h2>
              <p className="text-black/80 mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Access controls and user authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection</li>
                <li>Secure storage of physical records</li>
                <li>Regular data backups and disaster recovery procedures</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">6. Your Rights</h2>
              <p className="text-black/80 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal and safety requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for certain uses of your information</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">7. Cookies and Website Technologies</h2>
              <p className="text-black/80 mb-4">
                Our website uses cookies and similar technologies to enhance your experience. 
                You can control cookie preferences through your browser settings.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">8. Third-Party Services</h2>
              <p className="text-black/80 mb-4">We may use third-party services including:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Donorbox for donation processing</li>
                <li>Email marketing platforms</li>
                <li>Website analytics tools</li>
                <li>Cloud storage services</li>
              </ul>
              <p className="text-black/80 mb-6">
                These services have their own privacy policies and terms of use.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">9. Data Retention</h2>
              <p className="text-black/80 mb-6">
                We retain personal information only as long as necessary for the purposes outlined in this policy, 
                unless a longer retention period is required or permitted by law. Service records may be retained 
                for up to seven years after service completion for continuity of care and legal compliance.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-black/80 mb-6">
                We are committed to protecting the privacy of children and comply with the Children&apos;s Online Privacy 
                Protection Act (COPPA). For children under 13, we require parental consent before collecting personal 
                information. For children 13-18, we may collect information with parental consent or as permitted by law 
                for service delivery.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">11. International Transfers</h2>
              <p className="text-black/80 mb-6">
                Your information may be transferred to and stored in countries other than your country of residence. 
                We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">12. Changes to This Policy</h2>
              <p className="text-black/80 mb-6">
                We may update this Privacy Policy periodically. We will notify you of any material changes by 
                posting the updated policy on our website and updating the effective date.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">13. Contact Information</h2>
              <p className="text-black/80 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-clay-beige/50 rounded-lg p-6 mb-6">
                <p className="text-black/80 mb-2"><strong>Child Arise Tennessee</strong></p>
                <p className="text-black/80 mb-2">Nashville, TN</p>
                <p className="text-black/80 mb-2">Email: bethany@childarisetn.org</p>
                <p className="text-black/80">Phone: (615) 490-1844</p>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 