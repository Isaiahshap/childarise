import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Child Arise Tennessee Terms of Service - Learn about the terms and conditions for using our services and website.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-clay-beige">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              These terms govern your use of Child Arise Tennessee&apos;s services and website. 
              Please read them carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            


            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-black/60 mb-8">
                <strong>Effective Date:</strong> July 1, 2025<br />
                <strong>Last Updated:</strong> July 7, 2025
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">1. Agreement to Terms</h2>
              <p className="text-black/80 mb-6">
                By accessing or using Child Arise Tennessee&apos;s (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) services, website, or programs, 
                you (&quot;you&quot; or &quot;your&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree 
                to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">2. About Child Arise Tennessee</h2>
              <p className="text-black/80 mb-6">
                Child Arise Tennessee is a registered 501(c)(3) tax-exempt nonprofit organization 
                and charitable organization in the State of Tennessee, dedicated to supporting children 
                and families affected by parental incarceration.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">3. Services Provided</h2>
              <p className="text-black/80 mb-4">Our services include but are not limited to:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Emotional and mental health support services</li>
                <li>Mentorship and life skills programs</li>
                <li>Academic and college support services</li>
                <li>Family connection and communication services</li>
                <li>Caregiver and household support programs</li>
                <li>Enrichment and recreational activities</li>
                <li>Website and digital resources</li>
                <li>Community outreach and education</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">4. Eligibility and Enrollment</h2>
              <p className="text-black/80 mb-4">
                To participate in our programs, you must:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Meet the eligibility criteria for specific programs</li>
                <li>Complete required intake and assessment processes</li>
                <li>Provide accurate and complete information</li>
                <li>Agree to participate in program activities and follow program guidelines</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">5. Participant Responsibilities</h2>
              <p className="text-black/80 mb-4">As a participant in our programs, you agree to:</p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Attend scheduled appointments and program activities</li>
                <li>Treat staff, volunteers, and other participants with respect</li>
                <li>Follow safety guidelines and facility rules</li>
                <li>Maintain confidentiality of other participants&apos; information</li>
                <li>Notify us promptly of any changes in your circumstances</li>
                <li>Use services appropriately and for their intended purpose</li>
                <li>Report any concerns or incidents to staff immediately</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">6. Code of Conduct</h2>
              <p className="text-black/80 mb-4">
                All participants must adhere to our code of conduct:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>No discrimination, harassment, or bullying</li>
                <li>No violence, threats, or intimidation</li>
                <li>No use of illegal substances on premises</li>
                <li>No inappropriate sexual behavior or contact</li>
                <li>No theft or destruction of property</li>
                <li>Respectful communication and language</li>
                <li>Appropriate dress and behavior</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">7. Confidentiality and Privacy</h2>
              <p className="text-black/80 mb-6">
                We are committed to protecting your privacy and maintaining confidentiality of your personal information. 
                However, confidentiality may be limited by legal requirements, safety concerns, or program policies. 
                Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">8. Mandatory Reporting</h2>
              <p className="text-black/80 mb-6">
                Our staff are mandated reporters under Tennessee law. We are required to report suspected child abuse, 
                neglect, or danger to appropriate authorities. We may also be required to report threats of harm to 
                self or others.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">9. Limitations of Service</h2>
              <p className="text-black/80 mb-4">
                Please understand that our services:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Are not a substitute for professional medical or mental health treatment</li>
                <li>May have waiting lists or limited availability</li>
                <li>Are subject to funding and resource constraints</li>
                <li>May be modified or discontinued based on organizational needs</li>
                <li>Are provided on a voluntary basis and may be terminated for cause</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">10. Website Use</h2>
              <p className="text-black/80 mb-4">
                When using our website, you agree to:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the website</li>
                <li>Not upload or transmit harmful content</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with website functionality</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">11. Intellectual Property</h2>
              <p className="text-black/80 mb-6">
                All content on our website, including text, graphics, logos, and materials, is the property of 
                Child Arise Tennessee or our licensors and is protected by copyright and other intellectual property laws. 
                You may not reproduce, distribute, or modify our content without written permission.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">12. Donations and Fundraising</h2>
              <p className="text-black/80 mb-6">
                Child Arise Tennessee is a registered 501(c)(3) tax-exempt nonprofit organization 
                in Tennessee, recognized as a charitable organization by both the State and federal government.
              </p>
              <p className="text-black/80 mb-6">
                Donations to Child Arise Tennessee are tax-deductible to the fullest extent allowed by law. 
                Unless specifically designated, all donations will be used to support our mission and general operations. 
                Please consult your tax advisor regarding the deductibility of your specific contribution.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">13. Termination of Services</h2>
              <p className="text-black/80 mb-4">
                We may terminate or suspend services for any participant who:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Violates these Terms of Service</li>
                <li>Engages in behavior that threatens safety or disrupts programs</li>
                <li>Provides false or misleading information</li>
                <li>Fails to meet program requirements</li>
                <li>No longer meets eligibility criteria</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">14. Limitation of Liability</h2>
              <p className="text-black/80 mb-6">
                To the fullest extent permitted by law, Child Arise Tennessee shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising out of or relating to your use of 
                our services. Our total liability shall not exceed the amount paid by you for services, if any.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">15. Indemnification</h2>
              <p className="text-black/80 mb-6">
                You agree to indemnify and hold harmless Child Arise Tennessee, its directors, officers, employees, 
                and volunteers from any claims, damages, losses, or expenses arising out of your use of our services 
                or violation of these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">16. Force Majeure</h2>
              <p className="text-black/80 mb-6">
                We shall not be liable for any delay or failure to perform resulting from causes beyond our reasonable 
                control, including but not limited to acts of God, war, terrorism, pandemic, government actions, or 
                other force majeure events.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">17. Governing Law</h2>
              <p className="text-black/80 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of Tennessee, 
                without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of 
                Tennessee.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">18. Severability</h2>
              <p className="text-black/80 mb-6">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions 
                shall continue in full force and effect.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">19. Changes to Terms</h2>
              <p className="text-black/80 mb-6">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes 
                by posting the updated Terms on our website. Your continued use of our services after such changes 
                constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">20. Contact Information</h2>
              <p className="text-black/80 mb-4">
                If you have questions about these Terms of Service, please contact us:
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