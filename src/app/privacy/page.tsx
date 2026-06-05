import { Metadata } from 'next';
import { LegalDocumentLayout } from '@/components/layout/LegalDocumentLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Child Arise Tennessee Privacy Policy — policies and practices for our nonprofit organization.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains how Child Arise Tennessee collects, uses, and protects personal information."
      breadcrumbLabel="Privacy Policy"
      effectiveDate="July 1, 2025"
      lastUpdated="July 7, 2025"
      currentPath="/privacy"
    >
<h2>1. Overview</h2>
              <p>
                Child Arise Tennessee (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy and confidentiality 
                of all individuals we serve. This Privacy Policy describes how we collect, use, disclose, and safeguard 
                your information when you visit our website, use our services, or interact with our organization.
              </p>

              <h2>2. Information We Collect</h2>
              
              <h3>2.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Demographic information (age, gender, family composition)</li>
                <li>Service-related information (program participation, case notes, assessments)</li>
                <li>Financial information (for donation processing and program eligibility)</li>
                <li>Health information (when necessary for service delivery)</li>
                <li>Educational information (academic records, school information)</li>
                <li>Emergency contact information</li>
              </ul>

              <h3>2.2 Sensitive Information</h3>
              <p>
                Given the nature of our services, we may collect sensitive information including details about 
                incarceration, family circumstances, mental health, and other personal situations. This information 
                is collected only when necessary for service delivery and is subject to additional protections.
              </p>

              <h3>2.3 Website and Digital Information</h3>
              <ul>
                <li>Website usage data (pages visited, time spent, user interactions)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Email engagement metrics</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul>
                <li><strong>Service Delivery:</strong> To provide counseling, mentorship, education, and support services</li>
                <li><strong>Program Administration:</strong> To manage program enrollment, scheduling, and coordination</li>
                <li><strong>Communication:</strong> To send program updates, appointment reminders, and organizational news</li>
                <li><strong>Fundraising:</strong> To process donations and maintain donor relationships</li>
                <li><strong>Legal Compliance:</strong> To meet reporting requirements and legal obligations</li>
                <li><strong>Program Evaluation:</strong> To assess program effectiveness and improve services</li>
                <li><strong>Safety:</strong> To ensure the safety and wellbeing of participants and staff</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              
              <h3>4.1 Limited Sharing</h3>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>With Your Consent:</strong> When you have given explicit permission</li>
                <li><strong>Service Providers:</strong> With trusted third parties who assist in service delivery</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect safety</li>
                <li><strong>Partner Organizations:</strong> With approved partners for coordinated care</li>
                <li><strong>Funding Sources:</strong> For reporting requirements (in aggregate or de-identified form)</li>
              </ul>

              <h3>4.2 Mandatory Reporting</h3>
              <p>
                As required by Tennessee law, we are mandated reporters for child abuse and neglect. 
                We may be required to report suspected abuse or neglect to appropriate authorities.
              </p>

              <h2>5. Data Security</h2>
              <p>We implement appropriate security measures to protect your information:</p>
              <ul>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Access controls and user authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection</li>
                <li>Secure storage of physical records</li>
                <li>Regular data backups and disaster recovery procedures</li>
              </ul>

              <h2>6. Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal and safety requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for certain uses of your information</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
              </ul>

              <h2>7. Cookies and Website Technologies</h2>
              <p>
                Our website uses cookies and similar technologies to enhance your experience. 
                You can control cookie preferences through your browser settings.
              </p>

              <h2>8. Third-Party Services</h2>
              <p>We may use third-party services including:</p>
              <ul>
                <li>Donorbox for donation processing</li>
                <li>Email marketing platforms</li>
                <li>Website analytics tools</li>
                <li>Cloud storage services</li>
              </ul>
              <p>
                These services have their own privacy policies and terms of use.
              </p>
              <p>
                Child Arise Tennessee is a registered 501(c)(3) tax-exempt nonprofit organization. 
                Donations are tax-deductible to the fullest extent allowed by law.
              </p>

              <h2>9. Data Retention</h2>
              <p>
                We retain personal information only as long as necessary for the purposes outlined in this policy, 
                unless a longer retention period is required or permitted by law. Service records may be retained 
                for up to seven years after service completion for continuity of care and legal compliance.
              </p>

              <h2>10. Children&apos;s Privacy</h2>
              <p>
                We are committed to protecting the privacy of children and comply with the Children&apos;s Online Privacy 
                Protection Act (COPPA). For children under 13, we require parental consent before collecting personal 
                information. For children 13-18, we may collect information with parental consent or as permitted by law 
                for service delivery.
              </p>

              <h2>11. International Transfers</h2>
              <p>
                Your information may be transferred to and stored in countries other than your country of residence. 
                We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2>12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any material changes by 
                posting the updated policy on our website and updating the effective date.
              </p>

              <h2>13. Contact Information</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="legal-contact">
                <p><strong>Child Arise Tennessee</strong></p>
                <p>Nashville, TN</p>
                <p>Email: bethany@childarisetn.org</p>
                <p>Phone: (615) 490-1844</p>
              </div>
    </LegalDocumentLayout>
  );
}
