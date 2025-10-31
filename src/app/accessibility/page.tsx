import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Child Arise Tennessee Accessibility Statement - Learn about our commitment to digital accessibility and how we ensure our services are accessible to all.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-clay-beige">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-fern/10 via-clay-beige to-earth-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-lato font-bold text-black mb-6">
              Accessibility Statement
            </h1>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              Child Arise Tennessee is committed to ensuring digital accessibility for all people, 
              including those with disabilities. We strive to make our services accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            


            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-black/60 mb-8">
                <strong>Effective Date:</strong> July 1, 2025<br />
                <strong>Last Updated:</strong> July 7, 2025
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">1. Our Commitment to Accessibility</h2>
              <p className="text-black/80 mb-6">
                Child Arise Tennessee is committed to ensuring that our digital services are accessible to all users, 
                including those with disabilities. We believe that everyone deserves equal access to information, 
                services, and opportunities, regardless of their abilities or the technologies they use.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">2. Accessibility Goals and Standards</h2>
              <p className="text-black/80 mb-4">
                We are working toward conforming to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
                While we have not yet achieved full compliance, we are committed to ongoing improvement to make our 
                website more accessible for people with disabilities.
              </p>
              <p className="text-black/80 mb-6">
                We recognize our obligations under the Americans with Disabilities Act (ADA) and are taking steps 
                to improve our digital accessibility. We welcome feedback and work with individuals to provide 
                reasonable accommodations.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">3. Current Accessibility Features</h2>
              <p className="text-black/80 mb-4">
                We are actively working to implement accessibility features on our website. Currently implemented features include:
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-3">3.1 Website Accessibility</h3>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Modern responsive design that works across devices</li>
                <li>Alternative text for main images and graphics</li>
                <li>Basic keyboard navigation for form elements</li>
                <li>Scalable text using browser zoom functionality</li>
                <li>Descriptive page titles and headings</li>
                <li>Structured HTML markup</li>
                <li>Form labels for input fields</li>
                <li>Consistent navigation structure</li>
                <li>Focus indicators on interactive elements</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">3.2 Communication Accessibility</h3>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Multiple communication channels (phone, email)</li>
                <li>Readable fonts and clear typography</li>
                <li>Standard document formats that work with assistive technology</li>
                <li>Alternative communication methods available upon request</li>
                <li>Staff trained to communicate clearly and patiently</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">4. Assistive Technology Compatibility</h2>
              <p className="text-black/80 mb-4">
                We strive to ensure our website works with common assistive technologies. While we cannot guarantee compatibility with all devices, we work to support:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Standard browser accessibility features</li>
                <li>Basic screen reader functionality</li>
                <li>Keyboard navigation for essential functions</li>
                <li>Browser zoom and magnification tools</li>
                <li>Voice control software for basic navigation</li>
                <li>Mobile accessibility features</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">5. Service Accessibility Commitment</h2>
              <p className="text-black/80 mb-4">
                We are committed to making our services accessible and will work with individuals to provide reasonable accommodations:
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-3">5.1 Accommodation Approach</h3>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>We evaluate accessibility needs on a case-by-case basis</li>
                <li>Flexible meeting locations when needed</li>
                <li>Alternative communication methods available</li>
                <li>Staff trained to work with diverse accessibility needs</li>
                <li>Collaboration with community accessibility resources</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">5.2 Program Accommodations</h3>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Individualized accommodation planning</li>
                <li>Materials in alternative formats when requested</li>
                <li>Flexible program scheduling</li>
                <li>Referrals to accessibility specialists when appropriate</li>
                <li>Ongoing assessment of accessibility barriers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">6. Ongoing Accessibility Efforts</h2>
              <p className="text-black/80 mb-4">
                We continuously work to improve accessibility through:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Regular accessibility audits and testing</li>
                <li>Staff training on accessibility best practices</li>
                <li>User feedback and testing with disability communities</li>
                <li>Implementation of accessibility features in new developments</li>
                <li>Collaboration with accessibility experts and consultants</li>
                <li>Staying current with accessibility standards and guidelines</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">7. Current Accessibility Limitations</h2>
              <p className="text-black/80 mb-4">
                We acknowledge that our website and services may not yet meet all accessibility standards. We are working to improve but currently have limitations including:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Limited screen reader optimization for complex page layouts</li>
                <li>Third-party embedded content (donation forms, social media) may not be fully accessible</li>
                <li>Some images may lack comprehensive alternative text descriptions</li>
                <li>Advanced keyboard navigation features are still being implemented</li>
                <li>Color contrast may not meet WCAG AA standards in all areas</li>
                <li>Video content currently lacks captions and audio descriptions</li>
                <li>Mobile accessibility features are basic and being improved</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">8. Third-Party Content</h2>
              <p className="text-black/80 mb-6">
                Our website may contain content from third-party providers (such as donation platforms, 
                social media widgets, or embedded videos). While we strive to ensure all content meets 
                accessibility standards, we may not have complete control over third-party accessibility features. 
                We actively work with vendors to improve accessibility of all integrated services.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">9. Browser and Device Compatibility</h2>
              <p className="text-black/80 mb-4">
                Our website is designed to work across various browsers and devices:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Mobile devices (iOS and Android)</li>
                <li>Tablet devices</li>
                <li>Desktop computers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">10. Requesting Accommodations</h2>
              <p className="text-black/80 mb-6">
                If you need accommodations to access our services or if you encounter accessibility barriers, 
                please contact us. We will work with you to provide the information, services, or assistance 
                you need in an accessible format. Accommodations may include:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Alternative document formats</li>
                <li>Sign language interpretation</li>
                <li>Assistive listening devices</li>
                <li>Large print materials</li>
                <li>Audio recordings</li>
                <li>Personal assistance services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">11. Feedback and Complaints</h2>
              <p className="text-black/80 mb-6">
                We welcome feedback about the accessibility of our services. If you encounter accessibility 
                barriers or have suggestions for improvement, please let us know. We take all feedback seriously 
                and use it to improve our accessibility efforts.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">12. Accessibility Training</h2>
              <p className="text-black/80 mb-6">
                Our staff and volunteers receive training on accessibility awareness, including how to 
                interact respectfully with people with disabilities, how to use accessibility features, 
                and how to identify and address accessibility barriers in our services.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">13. Alternative Access Methods</h2>
              <p className="text-black/80 mb-6">
                If you are unable to access our digital services due to accessibility barriers, 
                we offer alternative ways to access our information and services:
              </p>
              <ul className="list-disc pl-6 text-black/80 mb-6 space-y-2">
                <li>Phone consultations</li>
                <li>In-person meetings</li>
                <li>Email correspondence</li>
                <li>Printed materials</li>
                <li>Audio recordings</li>
              </ul>

              <h2 className="text-2xl font-semibold text-black mb-4">14. Legal Compliance Commitment</h2>
              <p className="text-black/80 mb-6">
                Child Arise Tennessee is committed to complying with applicable accessibility laws and standards, 
                including the Americans with Disabilities Act (ADA). While we are working toward full compliance, 
                we acknowledge that our current implementation may not meet all requirements. We are actively 
                improving our accessibility and welcome feedback to help us better serve individuals with disabilities. 
                If you encounter barriers, please contact us so we can work together to find solutions.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">15. Contact Information</h2>
              <p className="text-black/80 mb-4">
                For accessibility questions, accommodation requests, or to report accessibility barriers:
              </p>
              <div className="bg-clay-beige/50 rounded-lg p-6 mb-6">
                <p className="text-black/80 mb-2"><strong>Child Arise Tennessee - Accessibility Coordinator</strong></p>
                <p className="text-black/80 mb-2">Nashville, TN</p>
                <p className="text-black/80 mb-2">Email: bethany@childarisetn.org</p>
                <p className="text-black/80 mb-2">Phone: (615) 490-1844</p>
                <p className="text-black/80">TTY/TDD: (615) 490-1844</p>
              </div>
              <p className="text-black/80 mb-6">
                We aim to respond to accessibility inquiries within 48 hours during business days.
              </p>

              <h2 className="text-2xl font-semibold text-black mb-4">16. Updates to This Statement</h2>
              <p className="text-black/80 mb-6">
                We regularly review and update this accessibility statement to reflect current practices 
                and improvements. This statement will be updated whenever we make significant changes 
                to our accessibility features or policies.
              </p>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 